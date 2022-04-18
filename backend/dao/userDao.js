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
};

module.exports = dao;
