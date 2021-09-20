import React, { useEffect, useState} from "react";

export default function TodosApp ({todos,addTodo, fetchTodos}){
    const [text,setText] = useState("")

    useEffect(()=>{
        fetchTodos();
    },[])

    console.log("todos");
    return (
        <div className="TodosApp">
            <input
                type="text"
                value={text}
                onChange={e=>setText(e.target.value)}
            />
            <button onClick={()=>addTodo(text)}>Add</button>
            <ol>
                {
                    todos.map(
                        todo=><li key={todo.id} >{todo.title}</li>
                    )
                }
            </ol>
        </div>
    )
}