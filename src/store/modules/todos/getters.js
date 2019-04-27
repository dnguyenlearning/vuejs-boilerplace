export const doneTodos = state => {
    return state.todos.filter(todo => todo.completed)
}

export const adding = state => {
    return state.adding
}