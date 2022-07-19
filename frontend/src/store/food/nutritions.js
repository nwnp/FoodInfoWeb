import axios from "axios";

export default {
  state: {
    Nutritions: null,
    NutritionList: [],
    page: 1,
  },
  getters: {
    Nutritions: (state) => state.Nutritions,
    NutritionList: (state) => state.NutritionList,
    page: (state) => state.page,
  },
  mutations: {
    setNutritionList(state, payload) {
      state.NutritionList = payload;
    },
    setNutritionInfiniteScroll(state, payload) {
      state.NutritionList.push(...payload);
    },
    setPage(state, payload) {
      state.page = payload;
    },
  },
  actions: {
    async actNutritionList({ commit }, payload) {
      const url = encodeURIComponent(
        `http://apis.data.go.kr/1471000/HtfsInfoService2/getHtfsItem?ServiceKey=iDkLT4eS%2FHMo6lNvhVqC0ls3w2lW41gVYeFPsE98tklSxWHVKd%2F5G%2F7Dbu7Xrxt4Bb%2BFsPXzcc7nNzYN16eyUA%3D%3D&numOfRows=10&pageNo=${payload}&type=json`
      );
      await axios
        .get(`https://api.allorigins.win/raw?url=${url}`)
        .then((res) => {
          commit("setNutritionList", res.data.body.items);
        });
    },
    async actNutritionInfiniteScroll({ commit }, payload) {
      const { pageNumber, state } = payload;
      const url = encodeURIComponent(
        `http://apis.data.go.kr/1471000/HtfsInfoService2/getHtfsItem?ServiceKey=iDkLT4eS%2FHMo6lNvhVqC0ls3w2lW41gVYeFPsE98tklSxWHVKd%2F5G%2F7Dbu7Xrxt4Bb%2BFsPXzcc7nNzYN16eyUA%3D%3D&numOfRows=10&pageNo=${pageNumber}&type=json`
      );
      await axios
        .get(`https://api.allorigins.win/raw?url=${url}`)
        .then((res) => {
          if (res.data.body.items) {
            commit("setNutritionInfiniteScroll", res.data.body.items);
            commit("setPage", pageNumber);
            state.loaded();
          } else {
            state.complete();
          }
        });
    },
  },
};
