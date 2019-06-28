import { DeletedRepository } from "../repositories";

const Deleted = require("../models/deleted");

/**
 * services for deleted
 */
export class DeletedService {
  /**
   * save an deleted id to db
   * @param data an hit object
   */
  static async save(id: any) {
    const deleted = new Deleted({
      objectID: id
    });
    const saved = await DeletedRepository.find(id);
    /* is saved */
    if (saved.length === 0) {
      await DeletedRepository.save(deleted);
      console.log(
        new Date().toLocaleString(),
        `- Deleted saved (objectID: ${id})`
      );
    } else {
      console.log(new Date().toLocaleString(), "- Article no saved (saved)");
    }
  }
}
