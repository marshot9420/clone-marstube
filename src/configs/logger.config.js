import morgan from 'morgan';

export const loggerConfig = (app) => {
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else {
    app.use(morgan('short'));
  }
};
