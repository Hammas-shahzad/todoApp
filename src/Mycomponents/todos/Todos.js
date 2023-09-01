import React from 'react';
import Todoitem from '../todo/Todoitem';


export default function Todos(props) {

  // const listitems = props.todo.map((todo)=>{
  //   return <Todoitem todos={todo}/>})

  return (
    <div className="container  my-5">
      <h3 className="text-center"> Todos List</h3>

      {props.todoobjprops.length === 0 ? "No Todo list" : props.todoobjprops.map((todolist) => {
        return <Todoitem todos={todolist} key={todolist.sno} onDelete={props.onDelete} />
      })
      }



    </div>
  )
}
