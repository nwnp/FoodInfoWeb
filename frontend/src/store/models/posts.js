import axios from "axios";

export default {
  state: {
    Post: null,
    PostList: [],
  },
  getters: {
    Post: (state) => state.Post,
    PostList: (state) => state.PostList,
  },
  mutations: {
    setPostList(state, payload) {
      state.PostList = payload;
    },
  },
  actions: {
    async actPostList(context) {
      await axios
        .get("/serverApi/posts")
        .then((res) => {
          console.log(res.data.result);
          context.commit("setPostList", res.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
