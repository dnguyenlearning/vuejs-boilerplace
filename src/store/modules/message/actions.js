import * as types from "./types";

export const messageError = async ({commit},{message}) => {
    commit(types.MESSAGE_ERROR, {message})
}

export const messageSuccess = async ({commit},{message}) => {
    commit(types.MESSAGE_SUCCESS, {message})
}

export const messageClear = async ({commit}) => {
    commit(types.MESSAGE_CLEAR)
}
