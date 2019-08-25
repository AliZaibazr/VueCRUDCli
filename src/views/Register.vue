<template>
    <div class="mt-4">
        <h1>Register</h1>
        <div class="mt-4">
                <signin v-if="showSignIn"/>
        </div>
        <div class="mt-4">
                <signup v-if="showSignUp"/>
        </div>
    <div class="mt-4">
     <a class="btn btn-primary" v-on:click="signIn">Sign In</a>
     </div>
     <div class="mt-4">
    <a class="btn btn-primary" v-on:click="signUp">Sign Up</a>
    </div>            
            
    </div>
</template>
<script>
import Signup from '../components/Signup.vue'
import Signin from '../components/Signin.vue'
export default {
    name: "Register",
    data() {
        return {
            showSignIn: false,
            showSignUp: true

        }
    },
    components: {
        Signup,
        Signin
    },
    methods: {
        signIn: function () {
            this.showSignUp = false
            this.showSignIn = true
        },
        signUp: function () {
            this.showSignUp = true
            this.showSignIn = false
        }
    },
}
</script>
<style lang="scss" >
    .btn-primary:hover{
        cursor: pointer;
    }
</style>