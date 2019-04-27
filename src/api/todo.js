import axios from "@/client";

const host = `https://jsonplaceholder.typicode.com`

const todoApi = {
    getTodos: `${host}/todos`,
    addTodo: `${host}/todos`,
    getPosts: `${host}/posts`
}

export const getPosts = async () => {
    try{
        const response = await axios.get(todoApi.getPosts)
        if(response.status === 200){
            return response.data
        }
    }catch(err){
        throw err.message
    }
}
export const getTodos = async () => {
    try{
        const response = await axios.get(todoApi.getTodos)
        if(response.status === 200){
            return response.data
        }
    }catch(err){
        throw err.message
    }
}

export const addTodo = async ({todo}) => {
    try{
        const response = await axios.post(todoApi.addTodo, todo)
        if(response.status === 201){
            return response.data
        }
    }catch(err){
        throw err.message
    }
}
