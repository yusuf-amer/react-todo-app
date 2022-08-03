import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { FiEdit, FiDelete } from "react-icons/fi";

const Todo = (props) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    });

    const submitUpdate = (value) => {
        props.updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ""
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return (
        <li
            className="list-group-item align-items-center d-flex pe-point"
            id={props.todo.completed === true ? "completed" : "notCompleted"}
        >
            <div
                className="col-8 col-md-9"
                onClick={() => props.completeTodo(props.todo.id)}
            >
                {props.todo.text}
            </div>

            <div className="col-4 col-md-3 d-flex justify-content-evenly">
                <button className="btn btn-outline-danger" onClick={props.onDelete}>
                    <FiDelete />
                </button>

                <button
                    className="btn btn-outline-primary"
                    onClick={() => setEdit({ id: props.todo.id, value: props.todo.text })}
                >
                    <FiEdit />
                </button>
            </div>
        </li>
    );
};

export default Todo;
