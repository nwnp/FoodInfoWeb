const User = require("../models/users");
const bcrypt = require("bcrypt");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
  try {
    const { email, password, location, nickname, name } = req.body;
    const exUser = await User.findOne({ where: { email } });
    if (!exUser) {
      const hash = await bcrypt.hash(password, 12);
      await User.create({
        email,
        password: hash,
        location,
        nickname,
        name,
      });
      return res.status(201).json({
        success: true,
        msg: "가입 성공",
      });
    } else {
      return res.status(401).json({
        success: false,
        msg: "이미 가입된 회원",
      });
    }
  } catch (error) {
    console.error(`signup user error: ${error}`);
    return next(error);
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

const remove = async (req, res, next) => {
  try {
    const { email } = req.body;
    await User.destroy({ where: { email } });
    res.status(201).json({
      success: true,
      msg: "회원탈퇴 성공",
    });
  } catch (error) {
    console.error(`removeUser error: ${error}`);
    return next(error);
  }
};

module.exports = {
  signup,
  login,
  remove,
};
