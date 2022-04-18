const postDao = require("../dao/postDao.js");

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
      const result = await postDao.registration(params);
      return new Promise((resolve) => {
        resolve(result);
      });
    } catch (error) {
      console.error("post.service.postRegistration error");
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
};

module.exports = service;
