import { ArticleRepository, DeletedRepository } from "../repositories";

const Article = require("../models/Article");
const Deleted = require("../models/deleted");

/**
 * services for article
 */
export class ArticleService {
  /**
   * save an article to db
   * @param data an hit object
   */
  static async save(data: any) {
    const article = new Article({
      objectID: data.objectID,
      title: data.title,
      story_title: data.story_title,
      story_url: data.story_url,
      url: data.url,
      created_at: data.created_at,
      author: data.author
    });
    const saved = await ArticleRepository.find(data.objectID);
    /* is saved */
    if (saved.length === 0) {
      /* is deleted */
      const isDelete = await this.isDeleted(data.objectID);
      if (isDelete.length === 0) {
        await ArticleRepository.save(article);
        console.log(
          new Date().toLocaleString(),
          `- Article saved (objectID: ${data.objectID})`
        );
      } else {
        console.log(
          new Date().toLocaleString(),
          "- Article no saved (deleted)"
        );
      }
    } else {
      console.log(new Date().toLocaleString(), "- Article no saved (saved)");
    }
  }

  /**
   * delete an article from db
   * @param id article to delete
   */
  static async delete(id: any) {
    await ArticleRepository.delete(id);
    await DeletedRepository.save(new Deleted({ objectID: id }));
    console.log(new Date().toLocaleString(), "- Article deleted");
  }

  /**
   * verify if an article were deleted
   * @param id article to verify
   */
  static async isDeleted(id: string) {
    return await DeletedRepository.find(id);
  }

  /**
   * find all articles
   */
  static async findAll() {
    const data = await ArticleRepository.findAll();
    console.log(new Date().toLocaleString(), "- Find all articles");
    return data;
  }
}
