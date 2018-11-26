import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import {GET_FR} from './api.js';

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      raiting: [],
    },
    mutations: {
      raiting(state, data){
        state.raiting = data;
      }
    },
    actions:{
      async raiting({commit}, data){
        await axios.get(GET_FR, {
          params: {
            year: data.year,
            json: ''
          }
        }).then((res) => {
          commit('raiting', res.data.frs.fr)
        }).catch((er) => {
          console.error(er)
        });
      }
    }
  });

export default store;
