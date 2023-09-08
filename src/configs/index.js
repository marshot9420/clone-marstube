import { appConfig } from './app.config';
import { dbConfig } from './db.config';

export const initConfigs = () => {
  appConfig();
  dbConfig();
};
