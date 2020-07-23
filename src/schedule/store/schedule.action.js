export const addTodoAction = todo => ({
    type: "ADD_TODO",
    payload : todo
})
export const toggleTodoAction = todoId => ({
    type: "TOGGLE_TODO",
    payload: todoId
})

export const deleteTodoAction = todoId => ({
    type: "DEL_TODO",
    payload: todoId
})

// deleteTodoAction