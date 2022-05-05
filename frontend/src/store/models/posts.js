import axios from "axios";

export default {
  state: {
    Post: null,
    PostList: [],
    PostInsertedResult: {},
    PostRemovedResult: {},
    PostDetail: null,
  },
  getters: {
    Post: (state) => state.Post,
    PostList: (state) => state.PostList,
    PostInsertedResult: (state) => state.PostInsertedResult,
    PostRemovedResult: (state) => state.PostRemovedResult,
    PostDetail: (state) => state.PostDetail,
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
    setPostDetail(state, payload) {
      state.PostDetail = payload;
    },
  },
  actions: {
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
          // console.log(res.data.result);
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
    async actPostEdit(context, payload) {
      console.log(payload);
      // await axios
      //   .delete(`/serverApi/posts/delete/${payload}`)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.error(err);
      //   });
    },
    // actPostDetail(context, payload) {},
  },
};
