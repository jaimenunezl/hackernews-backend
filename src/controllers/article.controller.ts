import { Request, Response } from "express";
import { ArticleService } from "../services";

export class ArticleController {
  /**
   * find all articles from DataBase
   */
  static findAll = async (req: Request, res: Response) => {
    const data = await ArticleService.findAll();
    res.send(data);
  };

  /**
   * delete an Article from DataBase
   */
  static delete = (req: Request, res: Response) => {
    const { id } = req.params;
    ArticleService.delete(id);
    res.sendStatus(204);
  };
}
