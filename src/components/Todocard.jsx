import React from 'react'

export default function Todocard(props) {
  const { children, handleDeletetodo, index, handleEdittodo} = props
  return (
    <li className='todoitem'>
      {children}
      <div className='actions'>
        <button onClick={()=>handleEdittodo(index)}>
          <i className="fa-regular fa-pen-to-square"></i></button>
        <button onClick={()=>{handleDeletetodo(index)}}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  )
}
