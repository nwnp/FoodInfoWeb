const { Op } = require("sequelize");
const { User } = require("../models/");

const dao = {
  // user가 존재하는지 check
  check(params) {
    let setQuery = {};

    // email로 찾음
    if (params.email) {
      setQuery.where = {
        ...setQuery.where,
        email: { [Op.like]: `${params.email}` },
      };
    }

    // id로 찾음
    if (params.id) {
      setQuery.where = {
        ...setQuery.where,
        id: { [Op.like]: `${params.id}` },
      };
    }
    return new Promise((resolve, reject) => {
      User.findOne({ ...setQuery })
        .then((selected) => {
          resolve(selected);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  // 회원가입
  signup(params) {
    return new Promise((resolve, reject) => {
      User.create(params)
        .then((inserted) => {
          resolve(inserted);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // 회원탈퇴
  remove(params) {
    let setQuery = {};
    if (params.id) {
      setQuery.where = {
        ...setQuery,
        id: { [Op.like]: `${params.id}` },
      };
    }
    return new Promise((resolve, reject) => {
      User.destroy({ ...setQuery })
        .then(() => {
          const success = true;
          resolve(success);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  // 회원수정
  edit(params) {
    let setQuery = {};
    // email을 무조건 받아와야 함
    if (params.email) {
      setQuery.where = {
        ...setQuery.where,
        email: { [Op.like]: `${params.email}` },
      };
    }

    return new Promise((resolve, reject) => {
      User.update(params, { ...setQuery })
        .then((updated) => {
          resolve(updated);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  follow(user, params) {
    return new Promise((resolve, reject) => {
      user
        .addFollowing(parseInt(params.id, 10))
        .then((success) => {
          resolve(success);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  followList(params) {
    return new Promise((resolve, reject) => {
      User.findAll({
        include: {
          model: User,
          attributes: ["followingId", "followerId"],
        },
      })
        .then((success) => {
          resolve(success);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

module.exports = dao;
