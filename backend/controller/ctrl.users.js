const User = require("../models/users");
const bcrypt = require("bcrypt");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const userService = require("../service/userService.js");

const signup = async (req, res, next) => {
  try {
    const params = {
      email: req.body.email,
      password: req.body.password,
      location: req.body.location,
      nickname: req.body.nickname,
      name: req.body.name,
    };
    const result = await userService.signup(params);
    return res.status(200).json({ success: true, result });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.toString() });
  }
};

const login = async (req, res, next) => {
  passport.authenticate("local", (authError, user, info) => {
    if (authError) {
      console.error(`authError ${authError}`);
      return next(authError);
    }
    if (!user) {
      return res.status(404).json({ success: false, msg: info.message });
    }
    return req.login(user, (loginError) => {
      const { email, nickname, name } = user;
      if (loginError) {
        return next(loginError);
      }
      let token = "";
      token = jwt.sign(
        {
          email,
          nickname,
          name,
        },
        "secretkey",
        {
          expiresIn: "10m",
        }
      );
      return res.status(201).json({
        success: true,
        msg: "로그인 성공",
        token,
      });
    });
  })(req, res, next);
};

const remove = async (req, res, next) => {};

module.exports = {
  signup,
  login,
  remove,
};
