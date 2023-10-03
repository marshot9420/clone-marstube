import fetch from 'node-fetch';

import { ERROR, PAGETITLE, PUG, URL } from '../constants';
import {
  checkEmailExists,
  checkPasswordMatches,
  checkUsernameExists,
  createUserAccount,
  findUserByUsername,
  handleGithubLogin,
  logoutUser,
  verifyPassword,
} from '../services';

export const getJoin = (req, res) => {
  return res.render(PUG.PAGES.JOIN, { pageTitle: PAGETITLE.JOIN });
};

export const postJoin = async (req, res) => {
  const { name, username, email, password, confirmPassword, location } =
    req.body;
  const pageTitle = PAGETITLE.JOIN;

  try {
    checkPasswordMatches(password, confirmPassword);
    await checkUsernameExists(username);
    await checkEmailExists(email);
    await createUserAccount({ name, username, email, password, location });

    return res.redirect(URL.AUTH.LOGIN);
  } catch (error) {
    return res.status(400).render(PUG.PAGES.JOIN, {
      pageTitle,
      errorMessage: error.message,
    });
  }
};

export const getLogin = (req, res) => {
  return res.render(PUG.PAGES.LOGIN, { pageTitle: PAGETITLE.LOGIN });
};

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = PAGETITLE.LOGIN;

  try {
    const user = await findUserByUsername(username);

    await verifyPassword(password, user.password);

    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect(URL.ROOT.HOME);
  } catch (error) {
    return res.status(400).render(PUG.PAGES.LOGIN, {
      pageTitle,
      errorMessage: error.message,
    });
  }
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

  try {
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

      const user = await handleGithubLogin(userData, emailData);
      req.session.loggedIn = true;
      req.session.user = user;
      return res.redirect(URL.ROOT.HOME);
    } else {
      throw new Error('Access token not found.');
    }
  } catch (error) {
    return res.redirect(URL.AUTH.LOGIN);
  }
};

export const logout = (req, res) => {
  logoutUser(req);
  return res.redirect(URL.ROOT.HOME);
};
