<template>
    <v-app>
        <side-bar :isShow="isAuthenticated" v-show="isAuthenticated"></side-bar>
        <v-content>
            <router-view></router-view>
        </v-content>
        <v-snackbar
                v-model="snackbar"
                bottom
                left
                multi-line
                :timeout="timeout"
        >
            {{ text }}
            <v-btn
                    color="pink"
                    flat
                    @click="closeNotification"
            >
                Close
            </v-btn>
        </v-snackbar>
    </v-app>
</template>

<script>
    import SideBar from "@/components/sidebar"
    import config from "@/config"
    import {mapGetters} from "vuex"
    export default {
        name: 'App',
        components: {
            SideBar
        },
        computed: {
            ...mapGetters('users', ["isAuthenticated"]),
            ...mapGetters('message', ["type", "snackbar", "text"]),
        },
        data() {
            return {
                timeout: config.SNACKBAR_TIMEOUT,
            }
        },
        methods: {
            closeNotification(){
                this.$store.dispatch("message/messageClear")
            }
        }
    }
</script>
