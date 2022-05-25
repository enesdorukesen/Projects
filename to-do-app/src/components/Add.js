import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import styled from "styled-components";

const Container = styled.div``;

const Add = ({ toDoList, setToDoList }) => {
  const [input, setInput] = useState();
  let addTask = () => {
    setToDoList([...toDoList, { id: uuid(), task: input, done: false }]);
    console.log(toDoList);
    document.getElementById("input").value = "";
  };
  let handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <Container>
      <input
        type="text"
        id="input"
        placeholder="Task"
        onChange={handleChange}
      />
      <button type="submit" id="add" onClick={addTask}>
        Add Task
      </button>
    </Container>
  );
};

export default Add;
