import { getAPPConfig } from './constants';

export const startServer = (app) => {
  const APP = getAPPConfig();

  const handleListening = () => {
    console.log(`✅ Server listening on: ${APP.BASE_URL}:${APP.PORT}`);
  };

  app.listen(APP.PORT, handleListening);
};
