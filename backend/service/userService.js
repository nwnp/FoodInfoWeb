const userDao = require("../dao/userDao.js");
const bcrypt = require("bcrypt");
const User = require("../models/users");

const service = {
  async userSignup(params) {
    try {
      const exUser = await userDao.check(params);
      if (!exUser) {
        const hash = await bcrypt.hash(params.password, 12);
        const newParams = {
          ...params,
          password: hash,
        };
        const result = await userDao.signup(newParams);
        return new Promise((resolve) => {
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

  async userRemove(params) {
    try {
      // const exUser = await userDao.check(params);
      // if (!exUser) {
      //   const error = new Error("존재하지 않는 유저");
      //   return new Promise((resolve, reject) => {
      //     reject(error);
      //   });
      // }

      const result = await userDao.remove(params);
      return new Promise((resolve, reject) => {
        resolve(result);
      });
    } catch (error) {
      console.error("userRemove", error);
      return error;
    }
  },

  async userEdit(params) {
    try {
      const exUser = await userDao.check(params);
      if (!exUser) {
        const error = new Error("존재하지 않는 유저");
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }

      const result = await userDao.edit(params);
      return new Promise((resolve, reject) => {
        resolve(result);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },

  async addFollow(params) {
    try {
      const followId = {
        id: params.followId,
      };
      const exUser = await userDao.check(followId); // follower가 될 id를 check
      if (!exUser) {
        const error = new Error("존재하지 않는 유저");
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
      const newParams = {
        id: params.id,
      };
      const result = await userDao.follow(exUser, newParams);
      // follower가 될 user를 exUser로 넘김
      // following을 할 id를 newParams로 넘김
      return new Promise((resolve) => {
        resolve(result);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },

  async followList(params) {
    try {
      const followId = {
        id: params.followId,
      };
      const result = await userDao.followList(followId);
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
