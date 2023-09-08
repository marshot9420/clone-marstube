import { appConfig } from './configs/app.config';
import { authRouter } from './routers';

export const startServer = (app) => {
  const APP = appConfig();

  app.set('view engine', 'pug');
  app.set('views', process.cwd() + '/src/views');

  app.use('/auth', authRouter);

  const handleListening = () => {
    console.log(`✅ Server listening on: ${APP.BASE_URL}:${APP.PORT}`);
  };

  app.listen(APP.PORT, handleListening);
};
