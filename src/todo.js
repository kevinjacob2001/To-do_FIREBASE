import React from 'react';
import { ListItemText,ListItem,List,ListItemAvatar,Button } from '@material-ui/core';
import './Todo.css'
import db from './firebase';

function Todo(props){
    return(
       <div>
       <List className="todo__list"> 
           <ListItem>
               <ListItemAvatar>
 
               </ListItemAvatar>
               <ListItemText primary={props.todo.todo} secondary="Dummy deadline"/>
           </ListItem>
           <Button onClick={event=>db.collection("todos").doc(props.todo.id).delete()} variant="contained" color="secondary">DELETE ME</Button>
        </List>
    <hr/>
    </div>
    )
}

export default Todo;