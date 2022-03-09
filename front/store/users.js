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
    // this.$axios.post("http://localhost:8080/user", {
    //   email: payload.email,
    //   password: payload.password,
    //   nickname: payload.nickname,
    // });
  },

  logIn(context, payload) {
    this.$axios
      .post("http://localhost:8080/users/login", {
        email: payload.email,
        password: payload.password,
      })
      .then(() => {
        context.commit("setMe", payload);
        console.log("actions", payload);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
