export const state = () => ({
  fooInfo: null,
});

export const mutations = {
  setInfo(state, payload) {
    state.info = payload;
  },
};

export const actions = {
  async getInfo(context, payload) {
    try {
      const info = await this.$axios.get(
        `http://apis.data.go.kr/1471000/HtfsInfoService2/getHtfsItem?ServiceKey=iDkLT4eS%2FHMo6lNvhVqC0ls3w2lW41gVYeFPsE98tklSxWHVKd%2F5G%2F7Dbu7Xrxt4Bb%2BFsPXzcc7nNzYN16eyUA%3D%3D&numOfRows=1&Prduct=+프리맥&type=json`
      );
      if (!info) {
        console.log("nothing");
      }
      console.log(info["items"]);
      context.commit("setInfo", info);
      return info;
    } catch (err) {
      console.error(` err`);
    }
  },
};
