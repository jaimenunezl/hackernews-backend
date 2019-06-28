import app from "./app";
import errorHandler from "errorhandler";

app.use(errorHandler());

/* run server */
const server = app.listen(app.get("port"), () => {
  console.log(
    "================================================================="
  );
  console.log(
    "===========================HACKER NEWS==========================="
  );
  console.log(
    "================================================================="
  );
  console.log(
    new Date().toLocaleString(),
    "- Hacker News running / http://localhost:",
    app.get("port")
  );
});

export default server;
