import React from "react";

const Favorite = ({ responseData, favorites, setFavorites }) => {
  return (
    <div>
      <h3>Favorite Songs</h3>
      <ol>
        {favorites.map((item) => (
          <li key={item.url}>
            {item.name}
            {item.artist}
            <button>Remove</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Favorite;
