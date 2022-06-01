import React, { useState } from "react";

const Seach = ({ setKeyWord, keyWord, data }) => {
  const [input, setInput] = useState("");
  let onChangeHandler = (e) => {
    setInput(e.target.value);
    setKeyWord(input);
  };
  return (
    <div>
      <input type="text" onChange={onChangeHandler} />
      <button>Search</button>
    </div>
  );
};

export default Seach;
