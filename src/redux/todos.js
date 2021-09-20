import axios from "axios";

const initialState = {
    items : []
}

const ADD_TODO = 'ADD_TODO';
const SET_TODOS = "SET_TODOS";

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text
});

export const setTodos = (todos) =>({
    type: SET_TODOS,
    payload: todos
})

export const fetchTodos = ()=> async (dispatch)=> {
    const rest = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch(setTodos(rest.data))
}

const reducer = (state = initialState , action)=> {
    switch (action.type){
        case ADD_TODO: return {
            ...state,
            items: [...state.items, action.payload]
        }
        case SET_TODOS: return {
            ...state,
            items: action.payload
        }
        default : return state;
    }
}

export default reducer;
