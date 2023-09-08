import { appConfig } from './app.config';
import { envConfig } from './env.config';
import { dbConfig } from './db.config';
import { loggerConfig } from './logger.config';
import { pugConfig } from './pug.config';
import { middlewareConfig } from './middleware.config';
import { routerConfig } from './router.config';

export const initConfigs = (app) => {
  appConfig();
  envConfig();
  dbConfig();
  loggerConfig(app);
  middlewareConfig(app);
  pugConfig(app);
  routerConfig(app);
};
