export const pugConfig = (app) => {
  app.set('view engine', 'pug');
  app.set('views', process.cwd() + '/src/views');
};
