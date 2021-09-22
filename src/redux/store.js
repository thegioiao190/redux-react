import { combineReducers} from "redux"
import todoReducer from './todos'
import { configureStore } from "@reduxjs/toolkit"

const reducer = combineReducers({
    todo:todoReducer
})

export default configureStore({
    reducer
});