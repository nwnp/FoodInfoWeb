const postService = require("../service/postService.js");

const getPosts = async (req, res, next) => {
  try {
    const result = await postService.postsList();
    return res.status(201).json({ result });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error });
  }
};

const registration = async (req, res, next) => {
  try {
    const params = {
      title: req.body.title,
      content: req.body.content,
      userId: req.body.userId,
    };
    const result = await postService.postRegistration(params);
    return res.status(200).json({ result });
  } catch (error) {
    console.error("ctrl.registration error", error);
    return res.status(404).json({ error });
  }
};

// userId가 적은 모든 댓글들을 가져오기
const userPosts = async (req, res, next) => {
  try {
    const params = {
      userId: req.params.id,
    };
    const result = await postService.userOfPosts(params);
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const postEdit = async (req, res, next) => {
  try {
    const params = {
      id: req.params.id,
      title: req.body.title,
      content: req.body.content,
    };
    const result = await postService.postEdit(params);
    return res.status(201).json({ result });
  } catch (error) {
    return res.status(401).json({ error });
  }
};

const postDelete = async (req, res, next) => {
  try {
    const params = {
      id: req.params.id,
    };
    const result = await postService.postDelete(params);
    return res.status(201).json({ result });
  } catch (error) {
    return res.status(401).json({ error: error.toString() });
  }
};

module.exports = {
  getPosts,
  registration,
  userPosts,
  postEdit,
  postDelete,
};
