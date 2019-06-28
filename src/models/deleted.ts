import mongoose from "mongoose";

const DeletedSchema = new mongoose.Schema({
  objectID: String
});

const Deleted = mongoose.model("Deleted", DeletedSchema);

module.exports = Deleted;
