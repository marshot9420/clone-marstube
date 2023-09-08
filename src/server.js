import express from 'express';
import { getAPPConfig } from './constants';

export const startServer = () => {
  const APP = getAPPConfig();
  const app = express();

  const handleListening = () => {
    console.log(`✅ Server listening on: ${APP.BASE_URL}:${APP.PORT}`);
  };

  app.listen(APP.PORT, handleListening);
};
