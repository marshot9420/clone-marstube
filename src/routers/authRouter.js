import express from 'express';

import {
  getJoin,
  getLogin,
  postJoin,
  postLogin,
  startGithubLogin,
} from '../controllers';

const authRouter = express.Router();

authRouter.route('/join').get(getJoin).post(postJoin);
authRouter.route('/login').get(getLogin).post(postLogin);
authRouter.route('/github').get(startGithubLogin);

export default authRouter;
