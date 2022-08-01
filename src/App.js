import React, { useState } from "react";
import { RiEmotionSadLine } from "react-icons/ri";

import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./components/main.css";

const App = () => {
  let [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App container p-5">
      <TodoForm onSubmit={addTodo} />

      <div className="todos shadow-lg p-4 rounded bg-body mt-5 m-auto col-12 col-md-6">
        <ol
          className="todoList list-group list-group-flush list-group-numbered container-fluid"
          style={
            todos.length === 0
              ? { scrollbarWidth: "none" }
              : { scrollbarWidth: "thin" }
          }
        >
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={() => handleDelete(todo.id)}
              handleEdit
            />
          ))}

          {todos.length === 0 ? (
            <div className="text-center">
              <h3>
                <RiEmotionSadLine className="fs-1 text-danger" />
              </h3>
              <h3>You Don't have any tasks!</h3>
              <p>Add your first task now</p>
            </div>
          ) : (
            ""
          )}
        </ol>
      </div>
    </div>
  );
};

export default App;
