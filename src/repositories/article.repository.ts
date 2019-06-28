import { Model } from "mongoose";

const Article: Model<any> = require("../models/Article");

/**
 * repository for articles
 */
export class ArticleRepository {
  /**
   * find an article
   * @param id of article
   */
  static async find(id: string) {
    const data = await Article.find({ objectID: id }).exec();
    return data;
  }

  /**
   * find all articles
   */
  static async findAll() {
    const data = await Article.find().exec();
    return data;
  }

  /**
   * save an article
   * @param article to save
   */
  static async save(article: any) {
    await article.save();
  }

  /**
   * delete an article
   * @param id article to delete
   */
  static async delete(id: string) {
    await Article.deleteOne({ objectID: id }).exec();
  }
}
