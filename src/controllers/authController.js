export const getJoin = (req, res) => {
  return res.render('pages/join', { pageTitle: '회원가입' });
};

export const postJoin = (req, res) => {
  return res.redirect('/join');
};
