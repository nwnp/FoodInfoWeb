const Sequelize = require("sequelize");

module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(40),
          allowNull: false,
        },
        content: {
          type: Sequelize.STRING(500),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Post",
        tableName: "posts",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    // 게시글
    db.Post.belongsTo(db.User, { foreignKey: "userId", targetKey: "id" });

    // 댓글
    db.Post.hasMany(db.Comment, { foreignKey: "postId", sourceKey: "id" });

    // 해시태그
    db.Post.belongsToMany(db.Hashtag, {
      foreignKey: "postId",
      as: "Hashtags",
      through: "PostHashtag",
    });
  }
};
