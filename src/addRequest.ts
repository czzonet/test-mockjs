import { Express } from "express";
import { dataTotal } from "./mockData";

export const addRequest = (app: Express) => {
  app.get("/total", (req, res) => {
    res.json(dataTotal);
  });
};
