import axios from "axios";

export default {
  state: {
    Post: null,
    PostList: [],
    CommentList: [],
    PostInsertedResult: {},
    PostRemovedResult: {},
    PostUpdatedResult: {},
    PostDetail: null,
    PostNumber: null,
    PostTitle: null,
    PostContent: null,
    InsertedComment: null,
  },
  getters: {
    Post: (state) => state.Post,
    PostList: (state) => state.PostList,
    CommentList: (state) => state.CommentList,
    PostInsertedResult: (state) => state.PostInsertedResult,
    PostRemovedResult: (state) => state.PostRemovedResult,
    PostUpdatedResult: (state) => state.PostUpdatedResult,
    PostDetail: (state) => state.PostDetail,
    PostNumber: (state) => state.PostNumber,
    PostTitle: (state) => state.PostTitle,
    PostContent: (state) => state.PostContent,
    InsertedComment: (state) => state.InsertedComment,
  },
  mutations: {
    setPostList(state, payload) {
      state.PostList = payload;
    },
    setCommentList(state, payload) {
      state.CommentList = payload;
    },
    setInsertedResult(state, payload) {
      state.PostInsertedResult = { ...payload };
    },
    setRemovedResult(state, payload) {
      state.PostRemovedResult = { ...payload };
    },
    setUpdatedResult(state, payload) {
      state.PostUpdatedResult = { ...payload };
    },
    setPostDetail(state, payload) {
      state.PostDetail = payload;
    },
    setPostNumber(state, payload) {
      state.PostNumber = payload;
      window.sessionStorage.setItem("number", payload);
    },
    setPostTitle(state, payload) {
      state.PostTitle = payload;
    },
    setPostContent(state, payload) {
      state.PostContent = payload;
    },
    setInsertedComment(state, payload) {
      state.InsertedComment = payload;
    },
  },
  actions: {
    actPostNumber({ commit }, payload) {
      commit("setPostNumber", payload);
    },
    async actPostList(context) {
      await axios
        .get("http://localhost:8081/posts")
        .then((res) => {
          context.commit("setPostList", res.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    async actPostInsert(context, payload) {
      await axios
        .post("http://localhost:8081/posts/registration", payload)
        .then((res) => {
          context.commit("setInsertedResult", res.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    async actPostRemove({ commit }, payload) {
      await axios
        .delete(`http://localhost:8081/posts/delete/${payload}`)
        .then((res) => {
          commit("setRemovedResult", res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    async actPostEdit({ commit }, payload) {
      await axios
        .patch(`http://localhost:8081/posts/edit/${payload.id}`, payload)
        .then((res) => {
          commit("setUpdatedResult", res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    async actCommentList({ commit }, payload) {
      await axios
        .get(`http://localhost:8081/posts/${payload}/comments`)
        .then((res) => {
          commit("setCommentList", res.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    async actTitle({ commit }, payload) {
      await axios
        .get(`http://localhost:8081/posts/${payload}/comments/title`)
        .then((res) => {
          commit("setPostTitle", res.data.result[0].title);
          commit("setPostContent", res.data.result[0].content);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    async actComment({ commit }, payload) {
      console.log("action comment register", payload);
      await axios
        .post("http://localhost:8081/posts/comment", payload)
        .then((res) => {
          commit("setInsertedComment", res.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
