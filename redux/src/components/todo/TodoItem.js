import React from "react";
import { deleteToDo, ToggleToDo } from "../../redux/actions/toDoActions";
import { useDispatch } from "react-redux";

const TodoItem = ({ completed, task, id }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(ToggleToDo(id));
  };
  const handleDelete = () => {
    dispatch(deleteToDo(id));
  };

  return (
    <div style={{ display: "flex" }}>
      <h4>{task}</h4>
      <button onClick={handleToggle}>Done</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
