import React, { useState } from 'react'
import './Todo.css'
import { useNavigate } from 'react-router-dom'
import { usecrud } from '../../Crudprovider'

function Todo() {
  const {data,additem,setdel}=usecrud()
  const [inputdata,setinputdata]=useState([])
  
const naviget=useNavigate()

  const Addinput=()=>{
    const obj={
      id:Math.floor(Math.random()*100),
      name:inputdata
    }
    additem(obj)
    setinputdata('')
  }
  
  return (
    <>
<div className="todo">
<div className="container">
  <h2>To-Do List</h2>
  <input type="text" className="task-input"  value={inputdata} onChange={(e)=>setinputdata(e.target.value)} placeholder="Enter task" />
  <button className="btn add-btn" onClick={Addinput}>Add</button>
  <ul id="task-list">
   {
    data.map((val)=>{
      return(
        <li>
     {val.name} 
     <div className='btn-group'><button className="btn delete-btn" onClick={()=>setdel(val?.id)}>Delete</button>
     <button className="btn adit-btn" onClick={()=>naviget("/edititem", { state: { val } })} >add</button></div>
    </li>
      )
    })
   }
  </ul>
</div>
</div>
    </>
  )
}

export default Todo