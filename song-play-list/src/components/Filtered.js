import React from "react";

const Filtered = ({ responseData, favorites, setFavorites }) => {
  let onClickHandler = (item) => {
    favorites.filter((i) => {i.url === item.url);
    setFavorites([...favorites, item]);
    console.log(item);
  };

  return (
    <div>
      <h3>Filtered Songs</h3>
      <ol>
        {responseData.map((item) => (
          <li key={item.url}>
            {item.name}
            {item.artist}
            <button onClick={() => onClickHandler(item)}>Add/Remove</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Filtered;
