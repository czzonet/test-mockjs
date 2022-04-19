import { Express } from "express";
import { urlencoded, json } from "body-parser";

const logUrl = (url: string) => {
  console.log(new Date().toLocaleString(), url);
};

export const addMiddleware = (app: Express) => {
  app.use(urlencoded({ extended: false }));
  app.use(json());
  app.use((req, res, next) => {
    const url = req.url;
    logUrl(url);
    next();
  });
};
