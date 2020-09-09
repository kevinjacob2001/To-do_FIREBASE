import React, { useState } from 'react';
import './App.css';

function App() {
const [todos,setTodos]=useState(["Take dog for walk","go to beach"])

  return (
    <div className="App">
    
          <h1>Hello World!</h1>
          <input></input>
          <button>Add todo</button>
         
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
