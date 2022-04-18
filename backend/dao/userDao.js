const { Op } = require("sequelize");
const { User } = require("../models/");

const dao = {
  // user가 존재하는지 check
  check(params) {
    let setQuery = {};
    if (params.email) {
      setQuery.where = {
        ...setQuery.where,
        email: { [Op.like]: `${params.email}` },
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
    if (params.email) {
      setQuery.where = {
        ...setQuery,
        email: { [Op.like]: `${params.email}` },
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
};

module.exports = dao;
