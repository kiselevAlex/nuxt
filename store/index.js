import Vue from "vue";
import Vuex from "vuex";
import users from "./users/index";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    modules: {
      users: users
    },
    state: {},
    mutations: {}
  });

export default store;
