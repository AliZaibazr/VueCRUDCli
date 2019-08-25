<template>
  <div class="home">
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
    
  </div>
</template>


<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Card from "@/components/Card.vue";
import Form from "@/components/Form.vue"
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
    Card
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
