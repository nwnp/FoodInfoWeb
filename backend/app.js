const express = require("express");
const cookie = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");

const PORT = 8080;

const usersRouter = require("./routes/users");

app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie("cookiesecret"));
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

app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(PORT, "번에서 대기 중");
});
