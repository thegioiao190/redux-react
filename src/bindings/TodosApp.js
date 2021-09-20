import { connect } from "react-redux";
import axios from "axios";

import TodosApp from "../components/TodosApp";
import { addTodo,setTodos } from "../redux/todos";

const mapStateToProps = (state)=>({
    todos: state.todo.items
})

const mapActionToProps = dispatch => ({
    addTodo : text => dispatch(addTodo(text)),
    setTodos : todos => dispatch(setTodos(todos)),
    fetchTodos : async ()=>{
        const rest = await axios.get("https://jsonplaceholder.typicode.com/todos");
        dispatch(setTodos(rest.data))
    }
})


export default connect(mapStateToProps,mapActionToProps)(TodosApp)