const userDao = require("../dao/userDao.js");
const bcrypt = require("bcrypt");
const User = require("../models/users");

const service = {
  async signup(params) {
    try {
      const exUser = await userDao.check(params);
      if (!exUser) {
        const hash = await bcrypt.hash(params.password, 12);
        const newParams = {
          ...params,
          password: hash,
        };
        const result = await userDao.signup(newParams);
        return new Promise((resolve, reject) => {
          resolve(result);
        });
      }

      const error = new Error("이미 가입되어 있는 유저");
      return new Promise((resolve, reject) => {
        reject(error);
      });
    } catch (error) {
      return error;
    }
  },
};

module.exports = service;
