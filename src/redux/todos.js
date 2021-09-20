import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : []
}

const todo = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo(state,action){
            state.items.push(action.payload)
        },
        setTodos(state,action){
            state.items = action.payload
        }
    }
})

export const {addTodo,setTodos} = todo.actions;

export const fetchTodos = ()=> async (dispatch)=> {
    const rest = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch(setTodos(rest.data))
}

export default todo.reducer;
