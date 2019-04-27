import * as types from "./types";
import {getTodos, addTodo} from "@/api/todo"

export const getTodosAsync = async ({commit}) => {
    commit(types.GET_TODOS)
    try{
        const [todos] = await Promise.all([
            getTodos()
        ])
        commit(types.GET_TODOS_SUCCESS, {todos})
    }catch(error){
        commit(types.GET_TODOS_FAILED, {error})
    }
}

export const addTodoAsync = async ({commit}, {todo})=>{
    commit(types.ADD_TODO)
    try{
        const todoCreated = await addTodo({todo});
        commit(types.ADD_TODO_SUCCESS, {todo: todoCreated})
    }catch(error){
        commit(types.ADD_TODO_FAILED, {error})
    }
}
