import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin: 15px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  text-align: center;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  background: rgb(182, 182, 182);
  background: radial-gradient(
    circle,
    rgba(182, 182, 182, 1) 0%,
    rgba(145, 145, 145, 0.30575980392156865) 100%
  );
  animation: TransitioningBackground 10s ease infinite;
  transition: 1s;

  &::before {
    content: "";
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 1);
    width: 60px;
    height: 100%;
    top: 0;
    filter: blur(30px);
    transform: translateX(-100px) skewX(-15deg);
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 1);
    width: 30px;
    height: 100%;
    top: 0;
    filter: blur(5px);
    transform: translateX(-100px) skewX(-15deg);
  }

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    &::before,
    &::after {
      transform: translateX(300px) skewX(-15deg);
      transition: 1s;
    }
  }
`;

const DelButton = styled(Button)`
  color: red;
  font-size: 1rem;
  &:hover {
    color: white;
    background: rgb(112, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(180, 0, 0, 0.8) 0%,
      rgba(180, 0, 0, 1) 100%
    );
  }
`;
const DoneButton = styled(Button)`
  &:hover {
    background: linear-gradient(
      90deg,
      rgba(0, 255, 0, 0.8) 0%,
      rgba(0, 255, 0, 1) 100%
    );
  }
`;
const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.2);
  flex-direction: column;
  margin-top: 100px;
  padding-top: 5px;
  width: 80vw;
  min-width: 30px;
  border-radius: 20px;
`;
const Task = styled.div`
  color: white;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 255, 0, 0.4);
  height: 75px;
  width: 99%;
  min-width: 150px;
  border-radius: 20px;

  p {
    margin-left: 15px;
  }

  &:hover {
    background-color: rgba(0, 255, 0, 0.5);
  }
`;

const List = ({ toDoList, setToDoList }) => {
  return (
    <TaskContainer>
      {toDoList.map(({ id, task }) => (
        <Task>
          <p>{task}</p>
          <div>
            <DoneButton>Done</DoneButton>
            <DelButton
              onClick={() =>
                setToDoList((items) => items.filter((item) => item.id !== id))
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
              </svg>
            </DelButton>
          </div>
        </Task>
      ))}
    </TaskContainer>
  );
};

export default List;
