const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const userService = require("../service/userService.js");

const User = require("../models/users.js");

module.exports = () => {
  passport.use(
    new localStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const exUser = await User.findOne({ where: { email } });
          if (exUser) {
            // 현재 user가 있으면
            const result = await bcrypt.compare(password, exUser.password);
            if (result) {
              // passport.authenticate('local', (authError, user))로 전달
              done(null, exUser);
            } else {
              done(null, false, { message: "비밀번호가 일치하지 않습니다." });
            }
          } else {
            done(null, false, { message: "가입되지 않은 회원입니다." });
          }
        } catch (error) {
          console.error(`localstrategy ${error}`);
          done(error);
        }
      }
    )
  );
};
