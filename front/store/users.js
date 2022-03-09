export const state = () => ({
  me: null,
});

export const mutations = {
  setMe(state, payload) {
    state.me = payload;
  },
};

export const actions = {
  signUp(context, payload) {
    this.$axios
      .post("http://localhost:8080/users", {
        email: payload.email,
        password: payload.password,
        nickname: payload.nickname,
      })
      .then(() => {
        context.commit("setMe", payload);
      })
      .catch((err) => {
        console.error(err);
      });
  },

  logIn(context, payload) {
    this.$axios
      .post("http://localhost:8080/users/login", {
        email: payload.email,
        password: payload.password,
      })
      .then(() => {
        context.commit("setMe", payload);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
