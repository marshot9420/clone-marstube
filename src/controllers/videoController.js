import { PAGETITLE, PUG } from '../constants';

export const home = (req, res) => {
  return res.render(PUG.PAGES.HOME, { pageTitle: PAGETITLE.HOME });
};
