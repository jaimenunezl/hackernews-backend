import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  objectID: String,
  title: String,
  story_title: String,
  story_url: String,
  url: String,
  created_at: Date,
  author: String
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
