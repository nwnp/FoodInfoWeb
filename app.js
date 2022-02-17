const express = require("express");
const nunjucks = require("nunjucks");
const app = express();

const PORT = 8080;

app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.get("/", (req, res, next) => {
  res.render("index");
  next();
});

app.listen(PORT, () => {
  console.log(PORT, "번에서 대기 중");
});
