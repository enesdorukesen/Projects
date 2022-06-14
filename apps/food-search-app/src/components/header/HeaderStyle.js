import styled from "styled-components";

export const StyledForm = styled.form`
  height: 10vh;
  min-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #4a4a4a;
  background-color: #9a9a9a;
`;

export const Input = styled.input`
  height: 30px;
  border-radius: 15px 0 0 15px;
  min-width: 150px;
  padding-left: 15px;
  background-color: wheat;
  border: none;
  :focus {
    outline: none;
    background-color: #c5fffe;
  }
  :hover {
    background-color: #c5fffe;
  }
`;

export const Select = styled.select`
  height: 32px;
  border: none;
  background-color: #ffe69c;
  cursor: pointer;
  :focus {
    outline: none;
  }
  :hover {
    background-color: #c5fffe;
  }
`;

export const Button = styled.button`
  height: 32px;
  width: 75px;
  border: none;
  border-radius: 0 15px 15px 0;
  background-color: #9dff5f;
  cursor: pointer;
  :hover {
    background-color: #c5fffe;
  }
  :focus {
    outline: none;
  }
  :active {
    background-color: #9dd1d0;
  }
`;
