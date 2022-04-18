const express = require("express");
const router = express.Router();
const ctrlPosts = require("../controller/ctrl.posts.js");

router.get("/", ctrlPosts.getPosts);
router.post("/registration", ctrlPosts.registration);

// id === userId
router.get("/:id", ctrlPosts.userPosts);

// id === post.id
router.patch("/edit/:id", ctrlPosts.postEdit);

// id === post.id
router.delete("/delete/:id", ctrlPosts.postDelete);

module.exports = router;
