import { Request, Response } from "express";

export class DefaultController {
  static default = (req: Request, res: Response) => {
    res.send("Welcome to Hacker News API");
  };
}
