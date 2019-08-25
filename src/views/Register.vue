<template>
    <div>
        <h1>I am Register Page</h1>
<signin/>        
<signup/> 
    </div>
</template>
<script>
import Signup from '../components/Signup.vue'
import Signin from '../components/Signin.vue'
export default {
    name: "Register",
    data() {
        return {

        }
    },
    components: {
        Signup,
        Signin
    }
}
</script>
<style scoped>
    
</style>