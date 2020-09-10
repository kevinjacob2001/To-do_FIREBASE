import React, { useState, useEffect } from 'react';
import {Button, FormControl,InputLabel,Input} from '@material-ui/core'
import './App.css';
import Todo from './Todo';
import db from './firebase';

function App() {
const [todos,setTodos]=useState([ ])
const [input,setInput]=useState("")

//when app loads we need to listen to db and fetch new todos as they get add or removed

useEffect(()=>{
db.collection("todos").onSnapshot(snapshot=>{
  console.log(snapshot.docs.map(doc=>doc.data().todo));
  setTodos(snapshot.docs.map(doc=>doc.data().todo))
})
},[])

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
               <Todo text={todo}/>
              )
            })}
          </ul>
    
    </div>
  );
}

export default App;
