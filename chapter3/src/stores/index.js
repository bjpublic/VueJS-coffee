import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 2
  },
  getters: {
    multiply (state) {
      return state.count * state.count;
    },
  },
  mutations: {
    INCREMENT (state, payload) {
      state.count = state.count + payload;
    }
  },
  actions: {
    increment (context, payload) {
      context.commit("INCREMENT", payload)
    }
  }
});

export default store;
