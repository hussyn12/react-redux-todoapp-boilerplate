import todoConstant from '../Constant/Todo'
import TodoService from '../../Services/TodoService'

export const createTodo = () => {
    return {
        type: todoConstant.TODO_SET_DATA,
        payload: { todoId: null, todo: []}
    }
}

export const setTodoData = (todoId, todo) => {
    return {
        type: todoConstant.TODO_SET_DATA,
        payload: { todoId, todo }
    }
}

export const todoRequestFailed = errorMessage => {
    return { type: todoConstant.TODO_ERORR, payload: errorMessage };
}

export const reset = payload => {
    return {type: todoConstant.TODO_RESET_DATA, payload}
}

export const request = () => {
    return {type: todoConstant.TODO_REQUEST}
}

export const responce = payload => {
    return {type: todoConstant.TODO_RESPONCE, payload}
}

export const receive = payload => {
    return {type: todoConstant.TODO_RECEIVE, payload}
}

export const create = data => async dispatch => {
    try {
        dispatch(setTodoData(null, data))
        dispatch(request())
        const res = await TodoService.create(data)
        if (res) {
            dispatch(responce())
        }
    }
    catch (error) {
        dispatch(todoRequestFailed("Failed to create Task"))
    }
}

export const update = (todoId, data) => async dispatch => {
    try {
        dispatch(request())
        const res = await TodoService.update(data, todoId)
        if (res) {
           dispatch(responce()) 
        }
    }
    catch (error) {
        console.log(error)
        dispatch(todoRequestFailed("Unable to find Task with this Id"))
    }
}


export const list = () => async (dispatch) => {
    try {
        dispatch(request())
        const res = await TodoService.list()
        console.log(res)
        if (res) {
            dispatch(receive(res))
            console.log(res)
        }
    }
    catch (error) {
        console.log(error)
        dispatch(todoRequestFailed("Unable to Find Task"))
    }
}