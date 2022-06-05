import React from "react";
import {
  RecipeImage,
  RecipeCardStyle,
  RecipeHeader,
  Button,
} from "./HomeStyle";
import defaultImage from "../../assets/default-image.jpg";
import { Navigate, useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const moreClick = () => {
    Navigate("/details", { state: { recipe } });
  };

  return (
    <RecipeCardStyle>
      <RecipeHeader>{recipe.label}</RecipeHeader>
      <RecipeImage src={recipe?.image || defaultImage} />
      <Button onClick={moreClick}>View More</Button>
    </RecipeCardStyle>
  );
};

export default RecipeCard;
