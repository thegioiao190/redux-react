import { createStore, combineReducers, applyMiddleware} from "redux"
import todoReducer from './todos'
import thunk from "redux-thunk"

const reducer = combineReducers({
    todo:todoReducer
})

const myMiddleware = store => next => action => {
    if (action.type === "ADD_TODO" && action.payload === "fuck"){
        action.payload = "f***";
    }
    return next(action)
}

// const asyncMiddleware = store => next => action => {
//     console.log(next)
//     if(typeof(action)==="function"){
//         return action(next);
//     }
//     return next(action)
// }

export default createStore(reducer,applyMiddleware(myMiddleware,thunk));