import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    users:[]
  },
  mutations: {
    SET_PRODUCTS (state, products) {
      state.products = products
    },
    SET_USERS (state,users){
    state.users= users
    }
  },
  actions: {
    loadProducts ({ commit }) {
      axios
        .get('http://localhost:8000/api/auth/index')
        .then(r => r.data)
        .then(products => {
        console.log(products)
        commit('SET_PRODUCTS', products)
        })
    }, 

    loadUsers ({ commit }) {
      axios
        .get('http://localhost:8000/api/auth/index-user')
        .then(r => r.data)
        .then(users => {
        console.log(users)
        commit('SET_USERS', users)
        })
    }, 
  }
});
