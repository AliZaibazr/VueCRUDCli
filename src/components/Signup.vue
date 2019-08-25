<template>
    <div>
     <div class="row">
         <div class="col-4"></div>
         <div class="col-4">
         <div class="card">
             <div class="card-body">
                 <form class="form-group mb-4 ml-sm-4">
                     <input  type="text" placeholder="Name">
                 </form>
                 <form class="form-group mb-4 ml-sm-4">
                     <input  type="email" placeholder="email">
                 </form>
                 <form class="form-group mb-4 ml-sm-4">
                     <input  type="password" placeholder="Password">
                 </form>
                 <form class="form-group mb-4 ml-sm-4">
                     <input  type="password" placeholder="Confrim password">
                 </form>
                 <form class="form-group mb-4 ml-sm-4">
                     <button  type="button" class="btn btn-primary" >Register</button>
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
export default {
    name: "Signup",
    data() {
        return {

        }
    }
    
}
</script>
<style scoped>
.card {
background-color:  #42b983;;
}
</style>