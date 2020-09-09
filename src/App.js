import React, { useState } from 'react';
import './App.css';

function App() {
const [todos,setTodos]=useState(["Take dog for walk","go to beach","Welcome Kevin"])
const [input,setInput]=useState("")


const addTodo=(event)=>{

    event.preventDefault();
    setTodos([...todos,input])
  setInput("")
}

  return (
    <div className="App">
    
          <h1>Hello World!</h1>
          
          <form onSubmit={addTodo}>
          <input value={input} onChange={event=>setInput(event.target.value)}/>
          <button onClick={addTodo}>Add todo</button>
          </form>

          <ul>
            {todos.map((todo)=>{
              return(
                <li>{todo}</li>
              )
            })}
          </ul>
    
    </div>
  );
}

export default App;
