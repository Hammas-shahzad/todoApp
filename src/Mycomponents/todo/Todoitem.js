import React from 'react'

// export default function Todoitem(props) {
//   return (
 // "start": "react-scripts start --host 0.0.0.0",
//     <>
//     <h3>{props.todo.title}</h3>
//     <p>{props.todo.descrip}</p>
//     <button type="button" class="btn btn-sm btn-danger">Danger</button>
    
//     </>
//   )
// }
export default function Todoitem({todos,onDelete,addTodo}) {
  return (

    <>
    <h3>{todos.title}</h3>
    <p>{todos.desc}</p>
    {/* {!addTodo?<button type="button" class="btn btn-sm btn-danger" onClick={()=>{onDelete(todos)}}>Danger</button>:""} */}
    <button type="button" class="btn btn-sm btn-danger" onClick={()=>{onDelete(todos)}}>Danger</button>
    </>
  )
}
