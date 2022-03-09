const express = require("express");
const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    const params = {
      bodies: req.body,
    };
    console.log(params);
  } catch (err) {
    console.error(` err`);
    next(err);
  }
});

module.exports = router;
