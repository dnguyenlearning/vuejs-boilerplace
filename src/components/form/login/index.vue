<template>
    <v-container fluid fill-height>
        <v-layout column justify-center>
            <v-flex>
                <h3 class="display-2">Demo</h3>
                <v-subheader class="pa-0">(pw: demo1234, email: demo@gmail.com)</v-subheader>
                <v-subheader v-show="!!loginError" class="pa-0 error--text">{{loginError}}</v-subheader>
            </v-flex>
            <v-flex>
                <form @submit.prevent="login">
                    <v-text-field
                            v-model="email"
                            v-validate="'required|email'"
                            :error-messages="errors.collect('email')"
                            label="E-mail"
                            data-vv-name="email"
                            autofocus
                            required
                    ></v-text-field>
                    <v-text-field
                            v-model="password"
                            v-validate="'required|min:8'"
                            :counter="15"
                            :error-messages="errors.collect('password')"
                            label="Password"
                            data-vv-name="password"
                            required
                            type="password"
                    ></v-text-field>
                    <v-btn :loading="loggingIn" type="submit" :disabled="errors.any() || isValid" block color="primary">
                        Submit
                    </v-btn>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {createNamespacedHelpers} from "vuex"
    const {mapGetters} = createNamespacedHelpers('users')
    export default {
        $_veeValidate: {
            validator: 'new'
        },
        data() {
            return {
                password: '',
                email: ''
            }
        },
        computed: {
            ...mapGetters(['loggingIn', 'loginError']),
            isValid(){
                return !this.password || !this.email
            }
        },
        methods: {
            login(){
                const user = {
                    email: this.email,
                    password: this.password
                }

                this.$store.dispatch('users/login', {user}).then(()=>{
                    this.$router.push('/dashboard')
                })
            }
        }
    }
</script>
