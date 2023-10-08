import React from 'react'

import { AiFillDelete } from "react-icons/ai";

function TodoList(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <AiFillDelete onClick={e=>{
            props.deleteItem(props.index)
        }} />
        
        </span>
    </li>
  )
}



export default TodoList
