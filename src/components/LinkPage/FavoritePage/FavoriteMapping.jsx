import Micro from "./mock/sports.json";
import React from "react";
import IndexPage from "./IndexPage";
console.log("oven:", Micro);

const FavoriteMapping = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-2 sm:grid-cols-1">
      {Micro.data.trendingCollections.edges.map((value, key) => (
        <IndexPage value={value} key={key} />
      ))}
    </div>
  );
};

export default FavoriteMapping;
