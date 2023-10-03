import bcrypt from 'bcrypt';

import { User } from '../models';
import { ERROR, EXCEPTION } from '../constants';

export const checkPasswordMatches = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    throw new Error(ERROR.WRONG.PASSWORD);
  }
};

export const checkUsernameExists = async (username) => {
  if (await User.exists({ username })) {
    throw new Error(ERROR.DUPLICATED.USERNAME);
  }
};

export const checkEmailExists = async (email) => {
  if (await User.exists({ email })) {
    throw new Error(ERROR.DUPLICATED.EMAIL);
  }
};

export const createUserAccount = async (userInfo) => {
  return await User.create(userInfo);
};

export const findUserByUsername = async (username) => {
  const user = await User.findOne({ username, socialOnly: false });

  if (!user) {
    throw new Error(ERROR.NOT_FOUND.USER);
  }

  return user;
};

export const verifyPassword = async (inputPassword, userPassword) => {
  const isMatches = await bcrypt.compare(inputPassword, userPassword);

  if (!isMatches) {
    throw new Error(ERROR.WRONG.PASSWORD);
  }
};

export const handleGithubLogin = async (userData, emailData) => {
  const emailObj = emailData.find(
    (email) => email.primary === true && email.verified === true,
  );

  if (!emailObj) {
    throw new Error(ERROR.NOT_FOUND.USER);
  }

  let user = await User.findOne({ email: emailObj.email });
  if (!user) {
    user = await User.create({
      avatarUrl: userData.avatar_url,
      name: userData.name,
      email: userData.email,
      username: userData.login,
      password: '',
      socialOnly: true,
      location: userData.location,
    });
  }

  return user;
};

export const logoutUser = (req) => {
  req.session.destroy();
};
