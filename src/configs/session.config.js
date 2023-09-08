import MongoStore from 'connect-mongo';
import session from 'express-session';

export const sessionConfig = (app) => {
  app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: process.env.DB_URL,
      }),
    }),
  );
};
