<template>
  <div class="hello">
    <div class="left">
      <h1>{{title}}</h1>
      <div class="container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>





    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "HelloWorld",
   mounted () {
    this.$store.dispatch('loadProducts')
  },
  computed:{ 
    ...mapState([
    'title',
    'products'
  ]),


  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
