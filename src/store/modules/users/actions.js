import * as types from "./types";
import {userLogin} from "@/api/user"

export const login = async ({commit} , {user}) => {
    commit(types.USER_LOGIN)
    try{
        const userInfo = await userLogin({user})
        commit(types.USER_LOGIN_SUCCESS, {userInfo})
    }catch(error){
        commit(types.USER_LOGIN_FAILED, {error})
    }
}

export const logout = async ({commit})=>{
    commit(types.USER_LOGOUT)
}
