const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
        location: {
          type: Sequelize.STRING(50),
          allowNull: true,
        },
        nickname: {
          type: Sequelize.STRING(40),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "User",
        tableName: "users",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    // 게시글
    db.User.hasMany(db.Post, { foreignKey: "userId", sourceKey: "id" });

    // 댓글
    db.User.hasMany(db.Comment, { foreignKey: "commenter", sourceKey: "id" });

    // 팔로잉/팔로우
    db.User.belongsToMany(db.User, {
      foreignKey: "followingId",
      as: "Followers",
      through: "Follow",
    });
    db.User.belongsToMany(db.User, {
      foreignKey: "followerId",
      as: "Followings",
      through: "Follow",
    });

    // 좋아요/싫어요
    db.User.belongsToMany(db.Post, { through: "LikePost" });
    db.User.belongsToMany(db.Post, { through: "HatePost" });
  }
};
