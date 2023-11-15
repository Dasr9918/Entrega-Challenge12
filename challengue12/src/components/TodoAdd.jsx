import React, { useState } from "react";

const TodoAdd = ({ onNewTodo }) => {
  const [value, setValue] = useState("");

  const handleWrite = (e) => {
    setValue(e.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      description: `Hacer el proyecto ${value}`,
      done: false
    };
    onNewTodo(newTodo);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Tarea"
        className="form-control"
        onChange={handleWrite}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};

export default TodoAdd;

