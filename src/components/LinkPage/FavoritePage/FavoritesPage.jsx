import React from "react";
import Mapping from "../../mocks/Mapping";
import FavoriteMapping from "./FavoriteMapping";

const FavoritesPage = () => {
  return (
    <div className="flex flex-col p-5 gap-y-10">
      <h1 className="flex lg:items-start lg:justify-start lg:pl-20 sm:items-center sm:justify-center">
        Main/Favorites
      </h1>
      <h2 className="flex lg:items-start lg:justify-start lg:pl-20 sm:items-center sm:justify-center">
        Favorites
      </h2>
      <FavoriteMapping />
      <h2 className="flex lg:items-start lg:justify-start lg:pl-20 sm:items-center sm:justify-center">
        Recommended products
      </h2>
      <Mapping />
    </div>
  );
};

export default FavoritesPage;
