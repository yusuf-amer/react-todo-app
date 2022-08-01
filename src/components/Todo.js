import React from 'react'
import { RiDeleteBack2Line } from 'react-icons/ri'
import { FiEdit } from "react-icons/fi";

const Todo = (props) => {

    

    return (
        <li className="list-group-item row d-flex align-items-center" id={props.todo.id}>
            <div className='col-10 d-inline-block'>
                {props.todo.text}
            </div>
            
            <div className='actions col-1 d-inline-block text-end justify-content-evenly d-flex p-0'>
                <button className='btn btn-outline-danger m-1' onClick={props.onDelete}>
                    <RiDeleteBack2Line />
                </button>
            </div>
        </li>
    )
}

export default Todo
