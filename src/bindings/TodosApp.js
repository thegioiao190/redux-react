import { connect } from "react-redux";
import axios from "axios";

import TodosApp from "../components/TodosApp";
import { addTodo,setTodos,fetchTodos } from "../redux/todos";

const mapStateToProps = (state)=>({
    todos: state.todo.items
})

const mapActionToProps = dispatch => ({
    addTodo : text => dispatch(addTodo(text)),
    setTodos : todos => dispatch(setTodos(todos)),
    fetchTodos : () => dispatch(fetchTodos())
})
export default connect(mapStateToProps,mapActionToProps)(TodosApp)