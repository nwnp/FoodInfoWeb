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
    const result = await userService.userSignup(params);
    return res.status(200).json({ success: true, result });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.toString() });
  }
};

const remove = async (req, res, next) => {
  try {
    const params = { email: req.body.email };
    const result = await userService.userRemove(params);
    return res.status(200).json({ success: result });
  } catch (error) {
    return res.status(400).json({ success: false });
  }
};

const edit = async (req, res, next) => {
  try {
    const params = {
      email: req.body.email,
      location: req.body.location,
      nickname: req.body.nickname,
      name: req.body.name,
    };
    const result = await userService.userEdit(params);
    return res.status(200).json({ success: true, result });
  } catch (error) {
    console.error("edit", error);
  }
};

const userPosts = async (req, res, next) => {
  try {
    const params = {
      userId: req.params.id,
    };
  } catch (error) {}
};

// login 로직은 dao를 사용하지 않고 passport 로직 사용
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
      const { id, email, nickname, name } = user;
      if (loginError) {
        return next(loginError);
      }
      let token = "";
      token = jwt.sign(
        {
          id,
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

const follow = async (req, res, next) => {
  try {
    const params = {
      followId: req.body.followId, // follower가 될 id
      id: req.params.id, // following을 할 id
    };
    const result = await userService.addFollow(params);
    return res.status(201).json({ result });
  } catch (error) {
    return res.status(404).json({ error: error.toString() });
  }
};

module.exports = {
  signup,
  login,
  remove,
  edit,
  userPosts,
  follow,
};
