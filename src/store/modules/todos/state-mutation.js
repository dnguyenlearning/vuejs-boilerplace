import * as types from "./types"
const state = {
    todos: [],
    loading: false,
    adding: false,
    error: {}
}

const mutations = {
    [types.GET_TODOS](state){
        state.loading = true
        state.error = {}
    },
    [types.GET_TODOS_SUCCESS](state, {todos}){
        state.loading = false
        state.todos = todos
    },
    [types.GET_TODOS_FAILED](state, {error}){
        state.loading = false
        state.error = {...state.error, loading: error.message}
    },
    [types.ADD_TODO](state){
        state.adding = true
        state.error = {}
    },
    [types.ADD_TODO_SUCCESS](state, {todo}){
        state.adding = false
        state.todos = [todo, ...state.todos]
    },
    [types.ADD_TODO_FAILED](state, {error}){
        state.adding = false
        state.error = {...state.error, adding: error.message}
    }
}
export default {
    state, 
    mutations
}