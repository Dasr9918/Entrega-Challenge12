import { useReducer } from "react";
import TodoReducer from "../components/TodoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Hacer los challenges",
    done: false
  }
];

const useTODO = () => {
  const [todos, dispatch] = useReducer(TodoReducer, initialState);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] ADD TODO",
      payload: todo
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] DELETE TODO",
      payload: id
    };
    dispatch(action);
  };

  const handleToggleDone = (id) => {
    const action = {
      type: "[TODO] TOGGLE DONE",
      payload: id
    };
    dispatch(action);
  };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleDone
  };
};

export default useTODO;

