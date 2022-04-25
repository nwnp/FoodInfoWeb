const { Op } = require("sequelize");
const { Post, User, Hashtag, Comment } = require("../models/");

const dao = {
  list() {
    let setQuery = {};
    setQuery.order = [["createdAt", "DESC"]];
    return new Promise((resolve, reject) => {
      Post.findAll({
        include: {
          model: User,
          attributes: ["id", "nickname"],
        },
        ...setQuery,
      })
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
  hashtags(params) {
    return new Promise((resolve, reject) => {
      const hashtags = params.content.match(/#[^\s#]*/g);
      const post = params.post;
      const result = Promise.all(
        hashtags.map((tag) => {
          const title = tag.slice(1).toLowerCase();
          return Hashtag.findOrCreate({
            where: { title: title },
          });
        })
      ).then((result) => {
        post.addHashtags(result.map((r) => r[0])).then((res) => {
          resolve(res);
        });
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
  comments(params) {
    let setQuery = {};
    if (params.postId) {
      setQuery.where = {
        ...setQuery.where,
        id: { [Op.like]: `${params.postId}` },
      };
    }

    return new Promise((resolve, reject) => {
      Post.findAll({
        include: {
          model: Comment,
          attributes: ["comment", "commenter"],
        },
        ...setQuery,
      })
        .then((selectList) => {
          resolve(selectList);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

module.exports = dao;
