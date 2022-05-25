import { useState } from "react";
import "./App.css";
import Add from "./components/Add";
import List from "./components/List";
import { v4 as uuid } from "uuid";
import styled from "styled-components";
import img from "./components/background.jpg";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${img});
  padding-top: 30px;
`;

function App() {
  const [toDoList, setToDoList] = useState([
    { id: uuid(), task: "Buy eggs" },
    { id: uuid(), task: "Pay bills" },
    { id: uuid(), task: "Invite friends over" },
    { id: uuid(), task: "Fix the TV" },
  ]);

  return (
    <Wrapper>
      <Add toDoList={toDoList} setToDoList={setToDoList} />
      <List toDoList={toDoList} setToDoList={setToDoList} />
    </Wrapper>
  );
}

export default App;
