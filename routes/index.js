const express = require("express");
const router = express.Router();
const logger = require("../lib/logger");

router.get("/", (req, res, next) => {
  logger.info("GET /");
  res.render("index");
  next();
});

module.exports = router;
