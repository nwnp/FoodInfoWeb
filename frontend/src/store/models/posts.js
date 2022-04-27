import axios from "axios";

export default {
  state: {
    Post: null,
    PostList: [],
    PostInsertedResult: {},
    PostDetail: null,
  },
  getters: {
    Post: (state) => state.Post,
    PostList: (state) => state.PostList,
    PostInsertedResult: (state) => state.PostInsertedResult,
    PostDetail: (state) => state.PostDetail,
  },
  mutations: {
    setPostList(state, payload) {
      state.PostList = payload;
    },
    setInsertedResult(state, payload) {
      state.PostInsertedResult = { ...payload };
      console.log("mutations", state.PostInsertedResult);
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
    // actPostDetail(context, payload) {},
  },
};
