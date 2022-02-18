const express = require("express");
const nunjucks = require("nunjucks");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
// const http = require("http");

const PORT = 8080;

// const whitelist = ["http://localhost:8080"];

// // const corsOptions = {
// //   origin: function (origin, callback) {
// //     if (whitelist.indexOf(origin) !== -1) {
// //       callback(null, true);
// //     } else {
// //       callback(new Error("Not Allowed Origin!"));
// //     }
// //   },
// // };

// routing
const indexRouter = require("./routes/index");
const pageRouter = require("./routes/page");

// app.use(cors(corsOptions));
app.use(bodyParser.json());

app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

// routing
app.use("/", indexRouter);
app.use("/page", pageRouter);

app.listen(PORT, () => {
  console.log(PORT, "번에서 대기 중");
});
