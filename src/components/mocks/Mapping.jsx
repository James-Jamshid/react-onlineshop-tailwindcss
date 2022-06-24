import React from "react";
import MappingPage from "./IndexPage";
import sport from "./sports.json";
console.log("sport:", sport);

const Mapping = () => {
  return (
    <div>
      {sport.data.trendingCollections.edges.map((value, key) => (
        <MappingPage value={value} key={key} />
      ))}
    </div>
  );
};

export default Mapping;
