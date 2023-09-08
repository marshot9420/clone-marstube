import { appConfig } from './configs/app.config';

export const startServer = (app) => {
  const APP = appConfig();

  const handleListening = () => {
    console.log(`✅ Server listening on: ${APP.BASE_URL}:${APP.PORT}`);
  };

  app.listen(APP.PORT, handleListening);
};
