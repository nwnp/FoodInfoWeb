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
  },
  getters: {
    me: (state) => state.me,
    loading: (state) => state.Loading,
    error: (state) => state.Error,
  },
  mutations: {
    setMe(state, payload) {
      state.me = payload;
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
    authSignup(payload) {
      axios
        .post("http://localhost:8081/users/signup", payload)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
