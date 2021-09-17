import { createStore, combineReducers } from "redux"
import todoReducer from './todos'

const reducer = combineReducers({
    todo:todoReducer
})

console.log(createStore(reducer).getState())

export default createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    //https://github.com/reduxjs/redux-devtools