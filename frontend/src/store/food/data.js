import axios from "axios";

export default {
  state: {
    Nutritions: null,
    NutritionList: [],
  },
  getters: {
    Nutritions: (state) => state.Nutritions,
    NutritionList: (state) => state.NutritionList,
  },
  mutations: {
    setNutritionList(state, payload) {
      state.NutritionList = payload;
    },
  },
  actions: {
    async actNutritionList({ commit }) {
      const url = encodeURIComponent(
        "http://apis.data.go.kr/1471000/HtfsInfoService2/getHtfsItem?ServiceKey=iDkLT4eS%2FHMo6lNvhVqC0ls3w2lW41gVYeFPsE98tklSxWHVKd%2F5G%2F7Dbu7Xrxt4Bb%2BFsPXzcc7nNzYN16eyUA%3D%3D&numOfRows=10&type=json"
      );
      await axios
        .get(`https://api.allorigins.win/raw?url=${url}`)
        .then((res) => {
          console.log(res);
          console.log(typeof res);
          commit("setNutritionList", res.data.body.items);
        });
    },
  },
};
