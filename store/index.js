import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import {GET_FR} from './api.js';

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      raiting: [],
      preloader: false,
    },
    mutations: {
      raiting(state, data){
        state.raiting = data;
      },
      preloader(state, data){
        state.preloader = data;
      }
    },
    actions:{
      async raiting({commit}, data){
        commit('preloader', true);
        await axios.get(GET_FR, {
          params: {
            year: data.year,
            json: ''
          }
        }).then((res) => {
          commit('raiting', res.data.frs.fr);
          commit('preloader', false);
        }).catch((er) => {
          commit('preloader', false);
          console.error(er)
        });
      }
    }
  });

export default store;
