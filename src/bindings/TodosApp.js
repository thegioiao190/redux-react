import { connect } from "react-redux";

import TodosApp from "../components/TodosApp";
import { addTodo,setTodos } from "../redux/todos";

const mapStateToProps = (state)=>({
    todos: state.todo.items
})

const mapActionToProps = {
    addTodo,
    setTodos
}


export default connect(mapStateToProps,mapActionToProps)(TodosApp)