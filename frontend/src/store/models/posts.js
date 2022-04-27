import axios from "axios";

export default {
  state: {
    Post: null,
    PostList: [],
    PostInsertedResult: {},
  },
  getters: {
    Post: (state) => state.Post,
    PostList: (state) => state.PostList,
    PostInsertedResult: (state) => state.PostInsertedResult,
  },
  mutations: {
    setPostList(state, payload) {
      state.PostList = payload;
    },
    setInsertedResult(state, payload) {
      state.PostInsertedResult = { ...payload };
      console.log("mutations", state.PostInsertedResult);
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
    async actRemoveUser(context, payload) {
      await axios
        .delete("http://localhost:8081/users/remove", payload)
        .then(() => {
          alert("회원탈퇴를 성공했습니다.");
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
