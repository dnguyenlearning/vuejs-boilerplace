<template>
    <v-app>
        <side-bar :isShow="isAuthenticated" v-show="isAuthenticated"></side-bar>
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    import SideBar from "@/components/sidebar"
    import {createNamespacedHelpers} from "vuex"
    const {mapGetters} = createNamespacedHelpers("users")
    export default {
        name: 'App',
        components: {
            SideBar
        },
        computed: {
            ...mapGetters(["isAuthenticated"])
        },
        data() {
            return {
                //
            }
        }
    }
</script>
