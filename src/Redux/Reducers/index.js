import { combineReducers } from "redux"
import AuthReducer from "./AuthReducer"
import TodoReducer from "./TodoReducer"

const reducers =  combineReducers({
  auth: AuthReducer,
  todo: TodoReducer,
})

export default reducers