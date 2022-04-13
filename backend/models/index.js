const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];

// database model
const User = require("./users.js");
const Post = require("./posts.js");
const Hashtag = require("./hashtags.js");
const Comment = require("./comments.js");

// dotenv file
const dotenv = require("dotenv");
dotenv.config();

// db setting
const db = {
  username: process.env.DB_ID,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
};
const sequelize = new Sequelize(db.database, db.username, db.password, {
  host: db.host,
  port: db.port,
  dialect: db.dialect,
});

db.sequelize = sequelize;

db.User = User;
db.Post = Post;
db.Hashtag = Post;
db.Comment = Comment;

User.init(sequelize);
Post.init(sequelize);
Hashtag.init(sequelize);
Comment.init(sequelize);

User.associate(db);
Post.associate(db);
Hashtag.associate(db);
Comment.associate(db);

module.exports = db;
