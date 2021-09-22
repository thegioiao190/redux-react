import { combineReducers} from "redux"
import todoReducer from './todos'
import authReducer from './auth'
import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist:["auth"]
  }

const reducer = combineReducers({
    todo:todoReducer,
    auth:authReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)
 
const store = configureStore({
    reducer:persistedReducer
})

export const persistor = persistStore(store)

export default store;