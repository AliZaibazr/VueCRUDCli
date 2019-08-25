<template>
     <div class="col-4">
          <form @submit.prevent="submitData">

    <v-select v-model="select.selected
    " label="name" :options="users" placeholder="select member"/>
    <label class="sr-only" for="inline-form-input-name">Name</label>
    <b-input
      id="inline-form-input-name"
      class="mb-4 ml-4"
      placeholder="Name"
      v-model="products.name"
    ></b-input>
   <!-- {{select.selected}} -->
    <label class="sr-only" for="inline-form-input-username">Username</label>
    <b-input-group  class="mb-4 ml-sm-4">
      <b-input id="inline-form-input-username" v-model="select.selected.email" placeholder="Price"></b-input>
    </b-input-group>

    <label class="sr-only" for="inline-form-input-username">Username</label>
    <b-input-group  class="mb-4 ml-4">
      <b-input id="inline-form-input-username" v-model="products.supplier" placeholder="Supplier"></b-input>
    </b-input-group>

     <b-input-group  class="mb-4 ml-4">
      <b-input id="inline-form-input-username" v-model="products.image" placeholder="Image"></b-input>
    </b-input-group>
    <button type="submit">Save</button>
  </form>
  
     </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name:"Form",
    data() {
        return {
        
        products: {
        name:'',
        price:'',
        supplier:'',
        image:'',
        
          },
        select:{
          selected:[],
          array: []
        }
            }
        
        },
    methods: {
        submitData() {
             let uri = 'http://localhost:8000/api/auth/store';
             this.axios.post(uri, this.$data.products).then((response) => {
             this.$router.push('/');
            });
        },
        
        },

     mounted () {
    this.$store.dispatch('loadUsers')
  


  },
     computed:{ 
    ...mapState([
    'users'
  ]),
  }
} 
</script>
<style>

</style>