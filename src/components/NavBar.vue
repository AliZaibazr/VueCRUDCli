<template>
    <div>
        <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/permissions">Permissions</router-link>
    </div>
    </div>
</template>
<script>
export default {
    name: "NavBar"
    
}
</script>
<style lang="scss">
    #nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>