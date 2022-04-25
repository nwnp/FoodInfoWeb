import axios from "axios";

export const state = () => ({
  me: null,
});

export const mutations = {
  setMe(state, payload) {
    state.me = payload;
  },
};

export const actions = {
  login(context, payload) {
    axios
      .post("/serverApi/users/login", payload)
      .then((res) => {
        console.log(res);
        // context.commit('setMe', res)
      })
      .catch((err) => {
        console.error("login actions error", err);
      });
  },
};
