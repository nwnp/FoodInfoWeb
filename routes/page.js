const express = require("express");
const logger = require("../lib/logger");

const router = express.Router();

router.get("/main", (req, res, next) => {
  logger.info("GET /main");
  res.render("main");
  next();
});

router.get("/ingredient", (req, res, next) => {
  logger.info("GET /ingredient");
  res.render("ingredient");
  next();
});

router.get("/vitamin", (req, res, next) => {
  logger.info("GET /vitamin");
  res.render("vitamin");
  next();
});

router.get("/post", (req, res, next) => {
  logger.info("GET /post");
  res.render("post");
  next();
});

router.get("/user", (req, res, next) => {
  logger.info(`${req.params}`);
});

module.exports = router;
