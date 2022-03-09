const express = require("express");
const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    const loginUser = {
      email: req.body.email,
      password: req.body.password,
    };
    console.log(loginUser);
    if (!loginUser) {
      res.status(500).send("데이터 통신 실패");
    }

    return res.status(200).json(loginUser);
  } catch (err) {
    console.error(` err`);
    next(err);
  }
});

module.exports = router;
