import React, { useState} from "react";

export default function TodosApp ({todos,addTodo}){
    const [text,setText] = useState("")

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
                        todo=><li>{todo}</li>
                    )
                }
            </ol>
        </div>
    )
}