import React, { useState} from "react";
import axios from "axios";
import { useEffect } from "react";

export default function TodosApp ({todos,addTodo,setTodos}){
    const [text,setText] = useState("")

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(res=>{
            setTodos(res.data)
        })
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