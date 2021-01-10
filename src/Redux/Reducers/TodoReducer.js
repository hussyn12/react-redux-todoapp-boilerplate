import todoConstant from '../Constant/Todo'

const initialState = {
    todoId: null,
    todo: [],
    loading: true,
    error: false,
    errorMessage: ""
}

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case todoConstant.TODO_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                errorMessage: ""
            }
        case todoConstant.TODO_RESPONCE:
            return {
                ...state,
                loading: false,
                error: false,
                errorMessage: ""
            }
        case todoConstant.TODO_RECEIVE:
            return {
                ...state,
                loading: false,
                todo: action.payload,
                error: false
            }    
        case todoConstant.TODO_SET_DATA:
            return {
                ...state,
                todo: action.payload.todoData,
                todoId: action.payload.todoId,
                loading: false,
                error: false,
                errorMessage: ""
            }
        case todoConstant.TODO_ERORR:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }    
        case todoConstant.TODO_RESET_DATA:
            return initialState
        default:
            return state     
    }
}

export default TodoReducer