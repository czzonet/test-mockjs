import { Express } from "express";
import { urlencoded, json } from "body-parser";
import cors from "cors";

const logUrl = (url: string) => {
  console.log(new Date().toLocaleString(), url);
};

export const addMiddleware = (app: Express) => {
  /** 跨域 */
  app.use(cors({ origin: true }));
  /** 跨域 额外补充头部 */
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  });
  /** 跨域 预请求 */
  app.options("*", cors() as any);

  app.use(urlencoded({ extended: false }));
  app.use(json());
  app.use((req, res, next) => {
    const url = req.url;
    logUrl(url);
    next();
  });
};
