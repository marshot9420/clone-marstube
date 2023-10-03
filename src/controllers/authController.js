import bcrypt from 'bcrypt';
import fetch from 'node-fetch';

import { ERROR, PAGETITLE, PUG, URL } from '../constants';
import { User } from '../models';

export const getJoin = (req, res) => {
  return res.render(PUG.PAGES.JOIN, { pageTitle: PAGETITLE.JOIN });
};

export const postJoin = async (req, res) => {
  const { name, username, email, password, confirmPassword, location } =
    req.body;
  const pageTitle = PAGETITLE.JOIN;
  if (password !== confirmPassword) {
    return res.status(400).render(PUG.PAGES.JOIN, {
      pageTitle,
      errorMessage: ERROR.DUPLICATED.PASSWORD,
    });
  }

  const usernameExists = await User.exists({ username });
  if (usernameExists) {
    return res.status(400).render(PUG.PAGES.JOIN, {
      pageTitle,
      errorMessage: ERROR.DUPLICATED.USERNAME,
    });
  }

  const emailExists = await User.exists({ email });
  if (emailExists) {
    return res.status(400).render(PUG.PAGES.JOIN, {
      pageTitle,
      errorMessage: ERROR.DUPLICATED.EMAIL,
    });
  }

  await User.create({
    name,
    username,
    email,
    password,
    location,
  });
  return res.redirect(URL.AUTH.LOGIN);
};

export const getLogin = (req, res) => {
  return res.render(PUG.PAGES.LOGIN, { pageTitle: PAGETITLE.LOGIN });
};

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = PAGETITLE.LOGIN;
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(400).render(PUG.PAGES.LOGIN, {
      pageTitle,
      errorMessage: ERROR.WRONG.USERNAME,
    });
  }

  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    return res.status(400).render(PUG.PAGES.LOGIN, {
      pageTitle,
      errorMessage: ERROR.WRONG.PASSWORD,
    });
  }

  return res.redirect(URL.ROOT.HOME);
};

export const startGithubLogin = (req, res) => {
  const config = {
    client_id: process.env.GH_CLIENT,
    allow_signup: false,
    scope: 'read:user user:email',
  };
  const params = new URLSearchParams(config).toString();
  const finishURL = `${URL.OAUTH.GITHUB_START}?${params}`;

  return res.redirect(finishURL);
};

export const finishGithubLogin = async (req, res) => {
  const config = {
    client_id: process.env.GH_CLIENT,
    client_secret: process.env.GH_SECRET,
    code: req.query.code,
  };
  const params = new URLSearchParams(config).toString();
  const finishURL = `${URL.OAUTH.GITHUB_FINISH}?${params}`;
  const tokenRequest = await (
    await fetch(finishURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
    })
  ).json();
  if ('access_token' in tokenRequest) {
    const { access_token } = tokenRequest;
    const apiURL = URL.OAUTH.GITHUB_API;
    const userData = await (
      await fetch(`${apiURL}/user`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    const emailData = await (
      await fetch(`${apiURL}/user/emails`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    const emailObj = emailData.find(
      (email) => email.primary === true && email.verified === true,
    );
    if (!emailObj) {
      return res.redirect(URL.AUTH.LOGIN);
    }
    let user = await User.findOne({ email: emailObj.email });
    if (!user) {
      user = await User.create({
        name: userData.name,
        email: userData.email,
        username: userData.login,
        password: '',
        socialOnly: true,
        location: userData.location,
      });
    }
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect(URL.ROOT.HOME);
  } else {
    return res.redirect(URL.AUTH.LOGIN);
  }
};
