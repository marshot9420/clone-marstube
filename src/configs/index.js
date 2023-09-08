import { appConfig } from './app.config';
import { envConfig } from './env.config';
import { dbConfig } from './db.config';
import { loggerConfig } from './logger.config';

export const initConfigs = (app) => {
  appConfig();
  envConfig();
  dbConfig();
  loggerConfig(app);
};
