import React, {useState} from "react";
//import React, { useState } from "react"; 는 React 라이브러리를 불러오고, 그중 상태 관리를 위한 함수인 useState만 따로 가져오는 코드

function TodoList() {
    const [todos , setTodos] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = () => {
        if (input.trim() === "") return;
        setTodos([...todos, input]);
        setInput("");
    };

    return(
        <div style={{textAlign:"center",marginTop:"50px"}}>
            <h2>To - do List</h2>
            < input
                type="text"
                value={input}
                placeholder="할 일 입력"
                onChange={(e)=>setInput(e.target.value)}
            />
            <button onClick={addTodo}>추가</button>
            <ul>
                {todos.map((todo, index)=>(
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}
export default TodoList;