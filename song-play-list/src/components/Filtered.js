import React from "react";

const Filtered = ({
  responseData,
  favorites,
  setFavorites,
  urlList,
  setUrlList,
}) => {
  const addRemove = (item) => {
    if (!urlList.includes(item.url)) {
      setFavorites([...favorites, item]);
      setUrlList([...urlList, item.url]);
      console.log(urlList);
    } else {
      let tempFavs = favorites.filter((i) => i.url !== item.url);
      setFavorites(tempFavs);
      let tempUrls = urlList.filter((i) => i !== item.url);
      setUrlList(tempUrls);
    }
  };
  return (
    <div>
      <h3>Filtered Songs</h3>
      <ol>
        {responseData.map((item) => (
          <li key={item.url}>
            {item.name}
            {item.artist}
            <button onClick={() => addRemove(item)}>Add/Remove</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Filtered;
