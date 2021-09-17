import { createStore, combineReducers } from "redux"
import todoReducer from './todos'

const reducer = combineReducers({
    todo:todoReducer
})

console.log(createStore(reducer).getState())

export default createStore(reducer);