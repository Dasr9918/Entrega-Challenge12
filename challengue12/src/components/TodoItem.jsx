import React from "react";

const TodoItem = ({ todo, onDelete, onToggleDone }) => {
  const handleToggleDoneClick = () => {
    onToggleDone(todo.id);
  };

  const handleDeleteClick = () => {
    onDelete(todo.id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={todo.done ? "completed" : "not-completed"}
        onClick={handleToggleDoneClick}
      >
        {todo.description}
      </span>
      <button
        className="btn btn-danger"
        style={{ backgroundColor: "red" }}
        onClick={handleDeleteClick}
      >
        Eliminar
      </button>
    </li>
  );
};

export default TodoItem;
