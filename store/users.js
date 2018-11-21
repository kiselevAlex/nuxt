import user from "./users/user.js";

export default {
  namespaced: true,
  state: {
    list: []
  },
  modules: {
    user: user
  }
};
