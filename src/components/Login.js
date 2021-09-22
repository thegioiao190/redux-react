import React, { useState } from "react";
import TodosApp from "../bindings/TodosApp";

export default function Login({login,auth}){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        login({email,password})
    }

    return !auth.token?
    <form className="Login" onSubmit={handleSubmit}>
        <input type="email" onChange={e=>setEmail(e.target.value)} value={email} placeholder="Your Email"/>
        <input type="password" onChange={e=>setPassword(e.target.value)} value={password} placeholder="Enter Password"/>
        <button>Login</button>
    </form>
    :<TodosApp/>
}