const express = require("express");
const router = express.Router();
const logger = require("../lib/logger");

router.post("/user", (req, res, next) => {
  logger.info(`${req.params}`);
});

module.exports = router;
