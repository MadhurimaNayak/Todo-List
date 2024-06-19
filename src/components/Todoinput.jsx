import {useState} from 'react'

export default function Todoinput(props) {
  const{ handleAddtodos, todoValue, setTodovalue }=props

  return (
    <header>
    <input value={todoValue} onChange={(e)=>{
      setTodovalue(e.target.value)}}
      placeholder="Enter your task"/>
    <button onClick={()=>{
      handleAddtodos(todoValue)
      setTodovalue('')
    }}>Add</button>
    </header>
  )
}
