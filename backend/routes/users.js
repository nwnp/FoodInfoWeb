const express = require("express");
const router = express.Router();
const ctrlUsers = require("../controller/ctrl.users.js");

router.get("/");
router.post("/login", ctrlUsers.login);
router.post("/signup", ctrlUsers.signup);
router.post("/:id/:followerId/follow", ctrlUsers.follow);
router.delete("/remove/:id", ctrlUsers.remove);
router.get("/:id/follow", ctrlUsers.followList);

// email, password를 제외한 수정
router.patch("/edit", ctrlUsers.edit);

// email 수정
// password 수정

module.exports = router;
