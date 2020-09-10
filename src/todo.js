import React, { useState } from 'react';
import { ListItemText,ListItem,List,ListItemAvatar,Button } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Modal } from '@material-ui/core';
import './Todo.css'
import db from './firebase';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props){
   
const classes=useStyles();    
const [open,setOpen]=useState(false)

const handleClose=()=>{
setOpen(false)
}

const handleOpen=()=>{
setOpen(true)
}  


    return(
       <>
       
       <Modal
       open={open}
       onClose={()=>setOpen(false)}
       >
           <div>
               <h1>I am a modal</h1>
               <button onClick={handleClose}>Click here to close</button>
           </div>
       </Modal>

       <List className="todo__list"> 
           <ListItem>
               <ListItemAvatar>
 
               </ListItemAvatar>
               <ListItemText primary={props.todo.todo} secondary="Dummy deadline"/>
           </ListItem>
           <button onClick={()=>setOpen(true)}>EDIT</button>
           <Button onClick={event=>db.collection("todos").doc(props.todo.id).delete()} variant="contained" color="secondary"><DeleteForeverIcon/></Button>
        </List>
    <hr/>

    </>
    )
}

export default Todo;