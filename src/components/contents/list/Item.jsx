import React from "react";

import { useTodo } from "../../../context/ToDoContext";

function Item({ todo }) {
  const { onChange, deleteTodo } = useTodo();

  return (
    <li key={todo.id} className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />

        <label>{todo.text}</label>

        <button
          className="destroy"
          onClick={() => deleteTodo(todo.id)}
        ></button>
      </div>
    </li>
  );
}

export default Item;
