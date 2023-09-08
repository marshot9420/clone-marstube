import express from 'express';
import { getJoin, postJoin } from '../controllers';

const authRouter = express.Router();

authRouter.route('/join').get(getJoin).post(postJoin);

export default authRouter;
