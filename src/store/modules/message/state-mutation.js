import * as types from "./types"
import config from "@/config";
const state = {
    type: "",
    open: false,
    text: "",
};

let timer;

const mutations = {
    [types.MESSAGE_SUCCESS](state, {message}) {
        state.text = message
        state.type = "error"
        state.open = true
        timer = setTimeout(()=>{
            state.text = ""
            state.type = ""
            state.open = false
        }, config.SNACKBAR_TIMEOUT)
    },
    [types.MESSAGE_ERROR](state, {message}){
        state.text = message
        state.type = "error"
        state.open = true
        timer = setTimeout(()=>{
            state.text = ""
            state.type = ""
            state.open = false
        }, config.SNACKBAR_TIMEOUT)
    },
    [types.MESSAGE_CLEAR](state){
        if(timer) clearTimeout(timer)
        state.text = ""
        state.type = ""
        state.open = false
    }
}
export default {
    state, 
    mutations
}