import Vue from "vue";
import Vuex from "vuex";
import Auth from "./models/auth";
import User from "./models/users";
import Post from "./models/posts";
import Data from "./food/nutritions";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
    User,
    Post,
    Data,
  },
});
