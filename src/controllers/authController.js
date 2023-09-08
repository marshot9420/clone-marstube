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
