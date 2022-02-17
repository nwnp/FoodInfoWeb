const express = require("express");
const nunjucks = require("nunjucks");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const PORT = 8080;

const corsOptions = {
  origin:
    "http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1" /*URL*/,
  optionsSuccessStatus: 200,
};

app.use(cors());
app.use(bodyParser.json());

app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.get("/", (req, res, next) => {
  res.render("index");
  next();
});

app.get("/products/:id", cors(corsOptions), (req, res, next) => {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(PORT, () => {
  console.log(PORT, "번에서 대기 중");
});
