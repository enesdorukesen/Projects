import styled from "styled-components";

export const RecipeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #9a9a9a;
`;

export const RecipeCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background-color: wheat;
  border-radius: 15px;
  overflow: hidden;
  height: 30vh;
  width: 30vh;
  margin: 10px;
`;

export const RecipeHeader = styled.h1`
  margin: 5px 15px 0 15px;
  font-size: 16px;
  text-align: center;
  height: 43px;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 1;
  :hover {
    overflow: visible;
  }
`;

export const RecipeImage = styled.img`
  margin-top: 5px;
  height: 70%;
  z-index: 0;
`;

export const Button = styled.button`
  height: 32px;
  width: 75px;
  margin-top: 5px;
  border: none;
  border-radius: 4px;
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

export const ImgDiv = styled.div``;

export const HomeImg = styled.img``;
