import React from "react";
import MappingPage from "./IndexPage";
import sport from "./sports.json";
console.log("sport:", sport);

const Mapping = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-2 sm:grid-cols-1">
      {sport.data.trendingCollections.edges.map((value, key) => (
        <MappingPage value={value} key={key} />
      ))}
    </div>
  );
};

export default Mapping;
