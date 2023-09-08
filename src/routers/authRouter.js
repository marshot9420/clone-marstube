import express from 'express';
import { getJoin, getLogin, postJoin, postLogin } from '../controllers';

const authRouter = express.Router();

authRouter.route('/join').get(getJoin).post(postJoin);
authRouter.route('/login').get(getLogin).post(postLogin);

export default authRouter;
