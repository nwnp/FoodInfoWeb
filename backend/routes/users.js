const express = require("express");
const router = express.Router();
const ctrlUsers = require("../controller/ctrl.users.js");

router.post("/login", ctrlUsers.login);
router.post("/signup", ctrlUsers.signup);
router.delete("/remove", ctrlUsers.remove);

module.exports = router;
