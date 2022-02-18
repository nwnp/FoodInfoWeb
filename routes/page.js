const express = require("express");

const router = express.Router();

router.get("/main", (req, res, next) => {
  res.render("main");
  next();
});

router.get("/posts", (req, res, next) => {
  res.render("post");
  next();
});

router.get("/ingredient", (req, res, next) => {
  res.render("ingredient");
  next();
});

router.get("/vitamin", (req, res, next) => {
  res.render("vitamin");
  next();
});

router.get("/post", (req, res, next) => {
  res.render("post");
  next();
});

module.exports = router;
