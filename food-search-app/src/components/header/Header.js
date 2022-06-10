import React from "react";
import Form from "./Form";

const Header = ({ query, setQuery, meal, mealTypes, setMeal, getData }) => {
  return (
    <div className="main">
      <Form
        query={query}
        setQuery={setQuery}
        meal={meal}
        mealTypes={mealTypes}
        setMeal={setMeal}
        getData={getData}
      />
    </div>
  );
};
//added smt usefull
export default Header;
