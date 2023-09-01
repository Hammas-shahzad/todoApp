import React from 'react'
import { useState } from 'react';



export const Addtodo = ({addTodo}) => {

    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc)
        {

            alert("Please Add todo  ")
        }
        else{

            addTodo(title,desc);
        settitle("")
        setdesc("")

        }
        

    }
    return (
        <div className='container'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} className="form-control"  onChange={(e)=>settitle(e.target.value)} placeholder='Add  Todo Title ' id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" placeholder='Add  Todo Description '  value={desc}  onChange={(e)=>setdesc(e.target.value)}  className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-success btn-sm btn-primary">Submit</button>
            </form>
        </div>
    )
}
