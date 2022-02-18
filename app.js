const express = require("express");
const nunjucks = require("nunjucks");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
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
app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

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
