import { connect } from "react-redux";

import TodosApp from "../components/TodosApp";
import { addTodo } from "../redux/todos";

const mapStateToProps = (state)=>({
    todos: state.todo.items
})

const mapActionToProps = {
    addTodo
}


export default connect(mapStateToProps,mapActionToProps)(TodosApp)