import React from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { clearToDoList } from "../../redux/actions/toDoActions";

const TodoList = () => {
  const { list } = useSelector((state) => state.toDoReducer);
  const dispatch = useDispatch();

  console.log(list);

  const handleClearList = () => {
    dispatch(clearToDoList());
  };
  return (
    <div>
      <div>
        {list.map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      </div>
      <div>
        <button onClick={handleClearList}>Clear</button>
      </div>
    </div>
  );
};

export default TodoList;
