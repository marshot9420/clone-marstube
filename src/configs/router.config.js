import { authRouter, rootRouter } from '../routers';

export const routerConfig = (app) => {
  app.use('/', rootRouter);
  app.use('/auth', authRouter);
};
