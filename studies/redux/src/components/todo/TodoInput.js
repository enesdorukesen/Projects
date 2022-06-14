import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../../redux/actions/toDoActions";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addToDo(text));
      setText("");
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Add Todo"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
};

export default TodoInput;
