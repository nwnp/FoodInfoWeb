import axios from "axios";
import jwtDecode from "jwt-decode";

const stateInit = {
  TokenUser: {
    id: null,
    email: null,
    nickname: null,
    name: null,
    iat: null,
    exp: null,
  },
};

export default {
  state: {
    me: { ...stateInit.TokenUser },
    Loading: false,
    Error: null,
    myPostList: [],
    UpdatedUser: null,
    FollowList: null,
  },
  getters: {
    me: (state) => state.me,
    loading: (state) => state.Loading,
    error: (state) => state.Error,
    myPostList: (state) => state.myPostList,
    UpdatedUser: (state) => state.UpdatedUser,
    FollowList: (state) => state.FollowList,
  },
  mutations: {
    setMe(state, payload) {
      state.me = payload;
    },
    setUpdatedUser(state, payload) {
      state.UpdatedUser = payload;
    },
    setLoading(state, payload) {
      state.Loading = payload;
      state.Error = null;
    },
    setError(state, payload) {
      state.Error = payload;
      state.Loading = false;
      state.me = { ...stateInit.TokenUser };
    },
    cleanError(state) {
      state.Error = null;
    },
    setLogout(state) {
      state.Loading = false;
      state.Error = null;
      state.me = { ...stateInit.TokenUser };
    },
    setMyPostList(state, payload) {
      state.myPostList = payload;
    },
    setFollowList(state, payload) {
      state.FollowList = payload;
    },
  },
  actions: {
    authLogin(context, payload) {
      axios
        .post("/serverApi/users/login", payload)
        .then((res) => {
          const decodedToken = jwtDecode(res.data.token);
          window.localStorage.setItem("token", JSON.stringify(decodedToken));

          context.commit("setLoading", false);
          context.commit("setMe", decodedToken);
        })
        .catch((err) => {
          console.error("login actions error", err);
          context.commit("setLoading", false);
          context.commit("setError", err);
        });
    },
    authLogout(context) {
      context.commit("cleanError");
      context.commit("setLoading", true);
      context.commit("setLogout");
      window.localStorage.removeItem("token");
    },
    async authSignup(context, payload) {
      await axios
        .post("/serverApi/users/signup", payload)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    async authRemoveUser(context, payload) {
      await axios
        .delete(`/serverApi/users/remove/${payload}`, payload)
        .then(() => {
          window.localStorage.removeItem("token");
        })
        .catch((err) => {
          console.error(err);
        });
    },
    async authMyPostList(context, payload) {
      await axios
        .get(`/serverApi/posts/${payload}`)
        .then((res) => {
          context.commit("setMyPostList", res.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    async actUserEdit({ commit }, payload) {
      await axios
        .patch("http://localhost:8081/users/edit", payload)
        .then((res) => {
          commit("setUpdatedUser", res.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    // eslint-disable-next-line no-unused-vars
    async actUserFollow({ commit }, payload) {
      await axios
        .post(
          `http://localhost:8081/users/${payload.id}/${payload.followerId}/follow`,
          9
        )
        .then((res) => {
          commit("setFollowList", res.result);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
