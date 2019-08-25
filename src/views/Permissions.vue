<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <v-select  v-model="permissionData.selected" label="name" :options="users" value="Select Value"/>
                
            </div>
            <div class="col-4">
<div class="form-group">
  <input type="email" class="form-control" v-model="permissionData.selected.email" placeholder="Email" >
</div>
            </div>
            <div class="col-4">
<div class="form-group">
  <input type="number" class="form-control" v-model="permissionData.selected.id" placeholder="ID">
</div>
            </div>
        </div>
        <div class="row" >

        </div>
        <div class="row">
            <div class="col-4 card" >
                <div class="card-header" >
                    Job Applicant
                </div>
                <div class="card-body" >
                    
                        Card Body
                </div>
                 <div class="card-footer" >
                    
                        Card Footer
                </div>
                
            </div>
            <div class="col-4 card" >
                <div class="card-header" >
                    Attendance
                </div>
                 <div class="card-body text-center" >
                    
                        Card Body
                        
                </div>
                 <div class="card-footer" >
                    
                        Card Footer
                </div>

               
            </div>
            <div class="col-4 card" >
                <div class="card-header" >
                    Salary
                </div>
                 <div class="card-body" >
                    
                        Card Body
                </div>
                 <div class="card-footer" >
                    
                        Card Footer
                </div>
               
            </div>
        </div>
 
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "Permissions",
    data() {
        return {
            permissionData: {
                email:"",
                id:"",
                selected:""
            },
        }
    },
    components: {
        
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

<style scoped>

</style>