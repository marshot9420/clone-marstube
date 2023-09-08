import express, { urlencoded } from 'express';

export const middlewareConfig = (app) => {
  app.use(urlencoded({ extended: true }));
  app.use(express.json());
};
