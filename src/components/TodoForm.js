import React, { useState } from "react";
import { MdAddTask } from "react-icons/md";

import shortid from "shortid";

const TodoForm = (props) => {
    const [text, setText] = useState("");

    function preventDefaults(e) {
        e.preventDefault();
        if (!/^\s*$/.test(text)) {
            props.onSubmit({
                id: shortid.generate(),
                text: text,
                completed: false,
            });
            setText("");
        }
    }

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <form
                    className="col-12 col-md-6 p-3 container  p-3 shadow-lg rounded"
                    onSubmit={preventDefaults}
                >
                    <h1 className="text-center text-primary text-uppercase">
                        {" "}
                        <span className="fw-bold">Todo</span> APP
                    </h1>
                    <hr className="border border-primary border-3 opacity-75" />

                    <div className="row justify-content-evenly">
                        <div className="col-8 p-0">
                            <input
                                type="text"
                                className="form-control border-primary taskInput text-primary"
                                onChange={handleChange}
                                value={text}
                                placeholder="type your task..."
                                autoFocus
                            />
                        </div>
                        <button
                            className="btn btn-outline-primary col-2"
                            onClick={preventDefaults}
                        >
                            <MdAddTask />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TodoForm;
