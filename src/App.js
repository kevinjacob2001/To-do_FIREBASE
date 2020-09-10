import React, { useState, useEffect } from 'react';
import {Button, FormControl,InputLabel,Input} from '@material-ui/core'
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
const [todos,setTodos]=useState([])
const [input,setInput]=useState("")

//when app loads we need to listen to db and fetch new todos as they get add or removed

useEffect(()=>{
db.collection("todos").orderBy("timestamp","desc").onSnapshot(snapshot=>{
  //console.log(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))
  setTodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))
})
},[])

const addTodo=(event)=>{

    event.preventDefault();
    db.collection("todos").add({
todo:input,
timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput("") //clear up the input
}

  return (
    <div className="App">
      <h1>🚀To do list app integrated with Firestore.</h1>
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
               <Todo key={todo.id} todo={todo}/>
              )
            })}
          </ul>
    
    </div>
  );
}

export default App;
