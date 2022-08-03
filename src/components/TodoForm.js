import React, { Fragment, useState } from "react";
import shortid from "shortid";
import { MdAddTask } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";

const Form = (props) => {
    const [inputVal, setInputVal] = useState(props.edit ? props.edit.value : "");

    const submitHandler = (e) => {
        e.preventDefault();

        if (!/^\s*$/.test(inputVal)) {
            props.onSubmit({
                id: shortid.generate(),
                text: inputVal,
                completed: false
            });
            setInputVal("");
        }
    };

    const featchData = (e) => {
        setInputVal(e.target.value);
    };

    return (
        <Fragment>
            <form className="row justify-content-evenly" style={props.edit ? {padding: '1rem'} : {padding: 'unset'}}>
                {props.edit ? (
                    <Fragment>
                        <div className="col-8">
                            <input
                                type="text"
                                className="col-auto form-control border-primary"
                                onChange={featchData}
                                value={inputVal}
                                autoFocus
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-outline-primary col-auto"
                            onClick={submitHandler}
                        >
                            <GiCheckMark />
                        </button>
                    </Fragment>
                ) : (
                    <Fragment>
                        <div className="col-8">
                            <input
                                type="text"
                                className="col-auto form-control border-primary"
                                onChange={featchData}
                                value={inputVal}
                                autoFocus
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-outline-primary col-auto"
                            onClick={submitHandler}
                        >
                            <MdAddTask />
                        </button>
                    </Fragment>
                )}
            </form>
        </Fragment>
    );
};

export default Form;
