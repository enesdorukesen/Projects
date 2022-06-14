import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import RecipeCard from "./RecipeCard";
import homeSvg from "../../assets/home.svg";
import { HomeImg, ImgDiv, RecipeContainer } from "./HomeStyle";

let appID = `e15f4734`;
let appKey = `442463ab466722969b04ec235fc77809`;
const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "TeaTime"];

const Home = () => {
  const [query, setQuery] = useState("potato");
  const [meal, setMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState();
  let reqUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appID}&app_key=${appKey}&mealType=${meal}`;

  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(reqUrl);
      console.log(result.data.hits);
      setRecipes(result.data.hits);
      if (result.data.more) {
        console.log("No food a this name");
      }
    } else {
      console.log("invalid query");
    }
  };

  return (
    <div>
      <Header
        query={query}
        setQuery={setQuery}
        meal={meal}
        mealTypes={mealTypes}
        setMeal={setMeal}
        getData={getData}
      />
      {recipes ? (
        <RecipeContainer>
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe.recipe} />
          ))}
        </RecipeContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
