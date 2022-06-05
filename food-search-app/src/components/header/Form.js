import React from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        name="mealTypes"
        id="MealTypes"
        onChange={(e) => setMeal(e.target.value)}
      >
        {mealTypes?.map((item, index) => (
          <option key={index} value={item.toLowerCase()}>
            {item}
          </option>
        ))}
      </select>
      <button onClick={handleClick}>Search</button>
    </form>
  );
};

export default Form;
