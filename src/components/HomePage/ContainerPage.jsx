import React from "react";
import MainCarousel from "../CarouselPage/MainCarousel";
import MultiCarousel from "../CarouselPage/MultiCarousel";
import Mapping from "../mocks/Mapping";

const ContainerPage = () => {
  return (
    <div className="flex flex-col p-5 gap-y-10 container mx-auto">
      <div className="flex">
        <MainCarousel />
      </div>

      <div className="flex flex-col p-5 gap-y-10">
        <h2>Brands</h2>
        <MultiCarousel />
      </div>
      <div className="flex flex-col p-5 gap-y-10">
        <h2>New products</h2>
        <Mapping />
      </div>
    </div>
  );
};

export default ContainerPage;
