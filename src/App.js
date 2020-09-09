import React, { useState } from 'react';
import {Button, FormControl,InputLabel,Input} from '@material-ui/core'
import './App.css';

function App() {
const [todos,setTodos]=useState(["Take dog for walk","go to beach","Welcome Kevin"])
const [input,setInput]=useState("")


const addTodo=(event)=>{

    event.preventDefault();
    setTodos([...todos,input])
    setInput("") //clear up the input
}

  return (
    <div className="App">
    
          <h1>Hello World!</h1>
          <form onSubmit={addTodo}>
   

          <FormControl>
            <InputLabel>Write a todo</InputLabel>
            <Input  value={input} onChange={event=>setInput(event.target.value)}/>
          </FormControl>

            <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
            Add todo
            </Button>
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
