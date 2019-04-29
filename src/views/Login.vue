<template>
    <v-container fluid fill-height>
        <v-layout style="height: 100%" row justify-center align-center>
            <v-flex sm6 md4 lg3 xs12>
                <v-card light>
                    <login-form></login-form>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import LoginForm from "@/components/form/login"

    export default {
        components: {
            LoginForm
        },
        data() {
            return {
                title: "Login"
            }
        }
    }
</script>
