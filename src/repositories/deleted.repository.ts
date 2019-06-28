import { Model } from "mongoose";

const Deleted: Model<any> = require("../models/deleted");

/**
 * repository for deleted
 */
export class DeletedRepository {
  /**
   * find an delete id
   * @param id of article
   */
  static async find(id: string) {
    const data = await Deleted.find({ objectID: id }).exec();
    return data;
  }

  /**
   * save an delete id
   * @param deleted to save
   */
  static async save(deleted: any) {
    await deleted.save();
  }
}
