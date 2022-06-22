const passport = require("passport");
const local = require("./localStrategy");
const User = require("../models/users");
const db = require("../models");

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      User.findOne({
        where: { id },
        attributes: ["id", "nickname"],
        include: [
          {
            model: db.Post,
            attributes: ["id"],
          },
          {
            model: db.User,
            as: "Followings",
            attributes: ["id"],
          },
          {
            model: db.User,
            as: "Followers",
            attributes: ["id"],
          },
        ],
      });
      return done(null, user);
    } catch (error) {
      console.error(error);
      return done(error);
    }
  });

  local();
};
