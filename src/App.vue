<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import Vue from 'vue'
import Vuex from "vuex";
import BootstrapVue from 'bootstrap-vue'



import router from "./router"
Vue.use(BootstrapVue)
Vue.use(Vuex);

const store = new Vuex.Store()
 router.beforeEach((to,from, next) => {
   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
   const currentUser = store.state.currentUser
  // console.log(this.currentUser)
  if(requiresAuth && !currentUser){
     
     next('/register')
   } else if (to.path == '/login' && currentUser){
     next('/')
   } else{
     next()
   }
 })
export default {
 
  
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
