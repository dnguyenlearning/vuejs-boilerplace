export const userInfo = state => {
    return state.userInfo
}

export const isAuthenticated = state => {
    return state.loggedIn;
}

export const loggingIn = state => {
    return state.loggingIn
}

export const loginError = state => {
    return state.error.login
}
