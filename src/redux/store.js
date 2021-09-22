import { combineReducers} from "redux"
import todoReducer from './todos'
import authReducer from './auth'
import { configureStore } from "@reduxjs/toolkit"

const reducer = combineReducers({
    todo:todoReducer,
    auth:authReducer
})

export default configureStore({
    reducer
});