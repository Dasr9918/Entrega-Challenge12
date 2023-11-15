import { TodoAdd } from "../components/TodoAdd";
import { TodoList } from "../components/TodoList";
import { useTODO } from "../hooks/useTODO";

export const HomePage = () => {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleDone
  } = useTODO();

  return (
    <>
      <h1>
        TodoApp:10,<small>pendientes:2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7"></div>
        <TodoList
          todos={todos}
          onDelete={handleDeleteTodo}
          onToggleDone={handleToggleDone}
        />
      </div>
      <div className="col-5">
        <TodoAdd onNewTodo={handleNewTodo} />
      </div>
    </>
  );
};
