import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import VueAxios from 'vue-axios'
import { getLocalUser } from "./helper/auth";
Vue.use(VueAxios, axios)

Vue.use(Vuex);
const user = getLocalUser
export default new Vuex.Store({
  state: {
    products: [],
    users:[],
    currentUser: user,
    isLoggedIn: !!user,
    loading: false,
    auth_error: null

  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn
    },
    isLoading(state){
      return state.loading
    },
    currentUser(state) {
      return state.currentUser
    },
    authrror(state){
      return state.auth_error
    },
    users(state){
      return state.auth_error
    }
  },
  mutations: {
    SET_PRODUCTS (state, products) {
      state.products = products
    },
    SET_USERS (state,users){
    state.users= users
    },
    login(state){
      state.loading = true
      state.auth_error =null
    },
    loginSuccess(state, payload) {
      state.auth_error = null
      state.isLoggedIn = true
      state.loading = false
      state.currentUser = Object.assign({}, payload.user, { token: payload.access_token})
      localStorage.setItem("user", JSON.stringify(state.currentUser))
    },
    loginFailed(state, payload){
      localStorage.removeItem("user")
      state.isLoggedIn = false
      state.currentUser =null

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
    login(context){
      context.commit("login")
    } 
  }
});
