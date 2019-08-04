import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'This is Title',
    products: []
  },
  mutations: {
    SET_PRODUCTS (state, products) {
      state.products = products
    }
  },
  actions: {
    loadProducts ({ commit }) {
      axios
        .get('http://localhost:8000/api/index')
        .then(r => r.data)
        .then(products => {
        console.log(products)
        commit('SET_PRODUCTS', products)
        })
    }
  }
});
