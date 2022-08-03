// import react useState
import React, { useState, Fragment } from "react";

// Import Components
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

// import React Icons
import { RiEmotionSadLine } from "react-icons/ri";
import { AiOutlineCheckCircle } from "react-icons/ai";

// Import style files
import "./styles.css";

// Import bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  // create new task
  const collectData = (todo) => {
    setTodos([todo, ...todos]);
  };

  // update task
  const updateTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === todoId ? newValue : todo))
    );
  };

  // complete task
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // delete task
  const deleteHandeler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App container p-5 justify-content-center">
      <div className="shadow-lg p-4 rounded col-md-7 m-auto">
        <h1 className="text-center fw-light text-uppercase text-priamry border-bottom mb-4 pb-3 justify-content-center gap-3 d-flex">
          <span className="d-flex align-items-center fw-bold text-primary">
            ToD
            <AiOutlineCheckCircle />
          </span>
          <span>App</span>
        </h1>

        <TodoForm onSubmit={collectData} />
      </div>

      <div className="shadow-lg mt-5 p-4 rounded col-md-7 m-auto position-relative">
        {todos.length === 0 ? (
          <div className="text-center">
            <h3>
              <RiEmotionSadLine className="fs-1 text-danger" />
            </h3>
            <h3>You Don't have any tasks!</h3>
            <p>Add your first task now</p>
          </div>
        ) : (
          <Fragment>
            <span className="position-absolute top-0 start-30 translate-middle badge rounded-pill bg-primary z-index-3">
              You have{" "}
              {todos.length === 1
                ? `${todos.length} task`
                : `${todos.length} tasks`}
            </span>

            <ol className="list-group list-group-flush list-group-numbered container todoList">
              {todos.map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  onDelete={() => deleteHandeler(todo.id)}
                  updateTodo={updateTodo}
                  completeTodo={completeTodo}
                />
              ))}
            </ol>
          </Fragment>
        )}
      </div>
    </div>
  );
}
