<template>
    <div>
     <div class="row mt-4">
         <div class="col-4"></div>
         <div class="col-4">
         <div class="card mt-4">
             <div class="card-body mt-4">
                 <form class="form-group mb-4 ml-sm-4">
                     <input  type="email" v-model="form.email" placeholder="email">
                 </form>
                 <form class="form-group mb-4 ml-sm-4">
                     <input  type="password" v-model="form.password" placeholder="Password">
                 </form>
                 <form class="form-group mb-4 ml-sm-4">
                     <button  type="button" @click="authentication()" class="btn btn-primary">Login</button>
                 </form>
             </div>
         </div>
         
         </div>
         <div class="col-4" >
         </div>
    </div>   
   </div>
</template>
<script>
import {login} from '../helper/auth.js'
export default {
    name: "Signin",
    data() {
        return {
            form: {
                email: '',
                password: ''

            }

        }
        
    },
    methods: {
        authentication() {
            this.$store.dispatch('login')

            login(this.$data.form)
            .then((res)=> {
                this.$store.commit("loginSucces",res)
                this.$router.push({path: '/'})

            })
            .catch((rej)=> {
                this.$store.commit("loginFailed")
                this.$router.push({path: '/'})
            })

        }

        }

    
}
</script>
<style scoped>
.card {
background-color:  #42b983;;
}
</style>