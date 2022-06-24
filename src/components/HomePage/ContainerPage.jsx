import React from "react";
import MainCarousel from "../CarouselPage/MainCarousel";
import MultiCarousel from "../CarouselPage/MultiCarousel";
import Mapping from "../mocks/Mapping";

const ContainerPage = () => {
  return (
    <div>
      <div className="flex">
        <MainCarousel />
      </div>

      <div className="">
        <h2>Brands</h2>
        <MultiCarousel />
      </div>
      <div>
        <h2>New products</h2>
        <Mapping />
      </div>
    </div>
  );
};

export default ContainerPage;
