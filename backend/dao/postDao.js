const { Op } = require("sequelize");
const { Post } = require("../models/");

const dao = {
  list() {
    let setQuery = {};
    setQuery.order = [["createdAt", "DESC"]];
    return new Promise((resolve, reject) => {
      Post.findAll({ ...setQuery })
        .then((selectList) => {
          resolve(selectList);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  registration(params) {
    return new Promise((resolve, reject) => {
      Post.create(params)
        .then((inserted) => {
          resolve(inserted);
        })
        .catch((error) => {
          console.error("dao.registration");
          reject(error);
        });
    });
  },
  userPosts(params) {
    let setQuery = {};
    if (params.userId) {
      setQuery.where = {
        ...setQuery.where,
        userId: { [Op.like]: `${params.userId}` },
      };
    }
    return new Promise((resolve, reject) => {
      Post.findAll({ ...setQuery })
        .then((selectList) => {
          resolve(selectList);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  edit(params) {
    let setQuery = {};
    if (params.id) {
      setQuery.where = {
        ...setQuery.where,
        id: { [Op.like]: `${params.id}` },
      };
    }
    return new Promise((resolve, reject) => {
      Post.update(params, { ...setQuery })
        .then((updated) => {
          resolve(updated);
        })
        .catch((err) => {
          console.error("dao.edit error", err);
          reject(err);
        });
    });
  },
  postDelete(params) {
    let setQuery = {};
    if (params.id) {
      setQuery.where = {
        ...setQuery.where,
        id: { [Op.like]: `${params.id}` },
      };
    }
    return new Promise((resolve, reject) => {
      Post.destroy({ ...setQuery })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

module.exports = dao;
