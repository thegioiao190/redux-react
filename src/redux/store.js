import { createStore, combineReducers, applyMiddleware} from "redux"
import todoReducer from './todos'

const reducer = combineReducers({
    todo:todoReducer
})

const myMiddleware = store => next => action => {
    if (action.type === "ADD_TODO" && action.payload === "fuck"){
        action.payload = "f***";
    }
    return next(action)
}

const asyncMiddleware = store => next => action => {
    if(typeof(action)==="function"){
        return action(next);
    }
    return next(action)
}

export default createStore(reducer,applyMiddleware(myMiddleware,asyncMiddleware));