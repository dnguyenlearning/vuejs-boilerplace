import Vue from "vue"
import Vuex from "vuex"
import todos from "./modules/todos" 
import users from "./modules/users"
import message from "./modules/message"
Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        todos,
        users,
        message
    }
});
