import { appConfig } from './app.config';
import { dbConfig } from './db.config';
import { loggerConfig } from './logger.config';

export const initConfigs = (app) => {
  appConfig();
  dbConfig();
  loggerConfig(app);
};
