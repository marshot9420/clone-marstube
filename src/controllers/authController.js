import { User } from '../models';

export const getJoin = (req, res) => {
  return res.render('pages/join', { pageTitle: '회원가입' });
};

export const postJoin = async (req, res) => {
  const { name, username, email, password, confirmPassword, location } =
    req.body;
  const pageTitle = '회원가입';

  if (password !== confirmPassword) {
    return res.status(400).render('pages/join', {
      pageTitle,
      errorMessage: '비밀번호 확인이 일치하지 않습니다.',
    });
  }

  const usernameExists = await User.exists({ username });
  if (usernameExists) {
    return res.status(400).render('pages/join', {
      pageTitle,
      errorMessage: '이미 가입된 닉네임입니다.',
    });
  }

  const emailExists = await User.exists({ email });
  if (emailExists) {
    return res.status(400).render('pages/join', {
      pageTitle,
      errorMessage: '이미 가입된 이메일입니다..',
    });
  }

  await User.create({
    name,
    username,
    email,
    password,
    location,
  });
  return res.redirect('/auth/login');
};
