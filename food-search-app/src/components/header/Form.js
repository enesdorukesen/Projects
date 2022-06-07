import React from "react";
import { StyledForm, Input, Button, Select } from "./HeaderStyle";

const Form = ({ query, setQuery, meal, mealTypes, setMeal, getData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  const handleClick = () => {
    getData();
    console.log("clicked");
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Select
        name="mealTypes"
        id="MealTypes"
        onChange={(e) => setMeal(e.target.value)}
      >
        {mealTypes?.map((item, index) => (
          <option key={index} value={item.toLowerCase()}>
            {item}
          </option>
        ))}
      </Select>
      <Button onClick={handleClick}>Search</Button>
    </StyledForm>
  );
};

export default Form;
