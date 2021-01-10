import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import reducers from '../Reducers/index'


const midleware = [thunk]

const store = createStore(
    reducers,
     compose(applyMiddleware(...midleware)) )

export default store