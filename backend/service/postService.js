const postDao = require("../dao/postDao.js");
const { Hashtag, Post } = require("../models");

const service = {
  async postsList() {
    try {
      const result = await postDao.list();
      return new Promise((resolve) => {
        resolve(result);
      });
    } catch (error) {
      console.error("post.service error", error);
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },

  async postRegistration(params) {
    try {
      const postResult = await postDao.registration(params);
      return new Promise((resolve) => {
        resolve(postResult);
      });
    } catch (error) {
      console.error("post.service.postRegistration error");
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },

  async hashtags(params) {
    try {
      const result = await postDao.hashtags(params);
      return new Promise((resolve) => {
        resolve(result);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },

  async userOfPosts(params) {
    try {
      const result = await postDao.userPosts(params);
      return new Promise((resolve, reject) => {
        resolve(result);
      });
    } catch (error) {
      console.error("postService.userOfPosts error");
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },

  async postEdit(params) {
    try {
      const result = await postDao.edit(params);
      return new Promise((resolve) => {
        resolve(result);
      });
    } catch (error) {
      console.error(error);
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },

  async postDelete(params) {
    try {
      const result = await postDao.postDelete(params);
      return new Promise((resolve) => {
        resolve(result);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },
  async postOfComment(params) {
    try {
      const result = await postDao.comments(params);
      return new Promise((resolve) => {
        resolve(result);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },
  async postComment(params) {
    try {
      const result = await postDao.commentRegistration(params);
      return new Promise((resolve) => {
        resolve(result);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },
  async nicknameOfPost(params) {
    try {
      const result = await postDao.nickname(params);
      return new Promise((resolve) => {
        resolve(result);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },
};

module.exports = service;
