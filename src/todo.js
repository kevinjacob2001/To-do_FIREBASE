import React from 'react';
import { ListItemText,ListItem,List,ListItemAvatar } from '@material-ui/core';
import './Todo.css'

function Todo(props){
    return(
        <List className="todo__list"> 
           <ListItem>
               <ListItemAvatar>
 
               </ListItemAvatar>
               <ListItemText primary={props.text} secondary="Dummy deadline"/>
           </ListItem>
        </List>
    )
}

export default Todo;