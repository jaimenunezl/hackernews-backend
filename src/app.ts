import express from "express";
import config from "./config/config";
import mongoose from "mongoose";
import { DefaultController, ArticleController } from "./controllers";
import { HitsService, ScheduleService } from "./services";

const cors = require("cors");
const app = express();

const connectionString = `mongodb+srv://${config.mongo.username}:${
  config.mongo.password
}@cluster0-i3d2c.gcp.mongodb.net/hackernews?retryWrites=true&w=majority`;

mongoose.connect(connectionString, { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "- Database conection failed"));
db.once("open", function() {
  console.log(new Date().toLocaleString(), "- Database connected ");
  HitsService.initialLoad();
  ScheduleService.scheduleLoad();
});

app.use(cors({ origin: true }));
app.set("port", config.app.port);

/* routes */
app.get(`/`, DefaultController.default);
app.get(`/api/${config.app.apiVersion}/article/all`, ArticleController.findAll);
app.delete(
  `/api/${config.app.apiVersion}/article/:id/delete`,
  ArticleController.delete
);

export default app;
