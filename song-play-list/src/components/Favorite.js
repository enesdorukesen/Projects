import React from "react";

const Favorite = ({
  responseData,
  favorites,
  setFavorites,
  urlList,
  setUrlList,
}) => {
  const removeSong = (item) => {
    let tempFavs = favorites.filter((i) => i.url !== item.url);
    setFavorites(tempFavs);
    let tempUrls = urlList.filter((i) => i !== item.url);
    setUrlList(tempUrls);
  };
  return (
    <div>
      <h3>Favorite Songs</h3>
      <ol>
        {favorites.map((item) => (
          <li key={item.url}>
            {item.name}
            {item.artist}
            <button onClick={() => removeSong(item)}>Remove</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Favorite;
