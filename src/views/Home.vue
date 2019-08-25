<template>
  <div class="home">
    <NavBar/>
    <div class="row">
    <div class="col-4">
      <div class="ml-4">
      <b-table striped hover small :items="products" :fields="fields" ></b-table>
    </div>
    </div> 
    <Form></Form>  
    <Card></Card>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Footer/>
  </div>
</template>


<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"
import Card from "@/components/Card.vue"
import Form from "@/components/Form.vue"
import NavBar from "../components/NavBar.vue"
import Footer from "../components/Footer.vue"
import { mapState } from 'vuex'

export default {
  name: "home",
  data(){


    return {
      fields: {
        id:{

        },
        name:{

        },
        price:{

        },
        supplier: {

        }
      }
    }

  },
  components: {
    HelloWorld,
    Form,
    Card,
    NavBar,
    Footer
  },
   mounted () {
    this.$store.dispatch('loadProducts')
  },
  computed:{ 
    ...mapState([
    'products'
  ]),
  }
};
</script>
<style lang="scss">
  .home {
    margin:0;
   padding:0;
   height:100%;

  }
</style>
