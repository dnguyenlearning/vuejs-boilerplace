import * as types from "./types"
import {getItem, clearItem, setItem} from "@/helpers/localStorage"
import * as _ from "lodash"
const userInfo = getItem('qw_u_vue')

const state = {
    userInfo: userInfo || {},
    loggedIn: !_.isEmpty(userInfo),
    loggingIn: false,
    error: {}
};

const mutations = {
    [types.USER_LOGIN](state) {
        state.loggingIn = true
        state.error = {}
    },
    [types.USER_LOGIN_FAILED](state, {error}){
        state.loggingIn = false
        state.error = {...state.error, login: error}
    },
    [types.USER_LOGIN_SUCCESS](state, {userInfo}){
        const {user, token} = userInfo
        setItem('qw_u_vue', user)
        setItem('qw_tk_vue', token)
        state.loggingIn = false
        state.loggedIn = true
        state.userInfo = userInfo
        state.error = {}
    },
    [types.USER_LOGOUT](state){
        clearItem('qw_u_vue')
        clearItem('qw_tk_vue')
        state.userInfo = {};
        state.loggedIn= false;
        state.error = {}
    }
}
export default {
    state, 
    mutations
}
