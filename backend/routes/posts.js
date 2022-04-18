const express = require("express");
const router = express.Router();
const ctrlPosts = require("../controller/ctrl.posts.js");

// 게시글 불러오기(desc)
router.get("/", ctrlPosts.getPosts);

// 게시글 등록
router.post("/registration", ctrlPosts.registration);

// id === userId
router.get("/:id", ctrlPosts.userPosts);

// id === post.id
router.patch("/edit/:id", ctrlPosts.postEdit);

// id === post.id
router.delete("/delete/:id", ctrlPosts.postDelete);

module.exports = router;
