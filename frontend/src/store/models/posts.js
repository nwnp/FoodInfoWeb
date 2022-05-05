import axios from "axios";

export default {
  state: {
    Post: null,
    PostList: [],
    PostInsertedResult: {},
    PostRemovedResult: {},
    PostUpdatedResult: {},
    PostDetail: null,
    PostNumber: null,
  },
  getters: {
    Post: (state) => state.Post,
    PostList: (state) => state.PostList,
    PostInsertedResult: (state) => state.PostInsertedResult,
    PostRemovedResult: (state) => state.PostRemovedResult,
    PostUpdatedResult: (state) => state.PostUpdatedResult,
    PostDetail: (state) => state.PostDetail,
    PostNumber: (state) => state.PostNumber,
  },
  mutations: {
    setPostList(state, payload) {
      state.PostList = payload;
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
    },
  },
  actions: {
    actPostNumber({ commit }, payload) {
      commit("setPostNumber", payload);
    },
    async actPostList(context) {
      await axios
        .get("/serverApi/posts")
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
      console.log(payload);
      await axios
        .patch(`http://localhost:8081/posts/edit/${payload.id}`, payload)
        .then((res) => {
          commit("setUpdatedResult", res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
