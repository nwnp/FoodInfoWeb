const express = require("express");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const dotenv = require("dotenv");
const nunjucks = require("nunjucks");

// passport
const passport = require("passport");
const passportConfig = require("./passport");

const PORT = 8081;
const app = express();

dotenv.config();

const usersRouter = require("./routes/users.js");
const postsRouter = require("./routes/posts.js");

// database sequelize
const { sequelize } = require("./models");
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("database connection success");
  })
  .catch((err) => {
    console.error("database connection failed", err);
  });

passportConfig();

app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.use("/", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "cookiesecret",
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/users", usersRouter);
app.use("/posts", postsRouter);

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

app.listen(PORT, () => {
  console.log(PORT, "번에서 대기 중");
});
