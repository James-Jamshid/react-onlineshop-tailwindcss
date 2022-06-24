import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import iphone1 from "../HomePage/assets/iphone.jpg";
import iphone2 from "../HomePage/assets/iphone.jpg";
import iphone3 from "../HomePage/assets/iphone.jpg";
import iphone4 from "../HomePage/assets/iphone.jpg";
import iphone5 from "../HomePage/assets/iphone.jpg";
import iphone6 from "../HomePage/assets/iphone.jpg";
import iphone7 from "../HomePage/assets/iphone.jpg";
import iphone8 from "../HomePage/assets/iphone.jpg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MultiCarousel = () => {
  return (
    <div>
      <Carousel responsive={responsive}>
        <img src={iphone1} alt="" className=" w-[148px] h-[148px]" />
        <img src={iphone2} alt="" className=" w-[148px] h-[148px]" />
        <img src={iphone3} alt="" className=" w-[148px] h-[148px]" />
        <img src={iphone4} alt="" className=" w-[148px] h-[148px]" />
        <img src={iphone5} alt="" className=" w-[148px] h-[148px]" />
        <img src={iphone6} alt="" className=" w-[148px] h-[148px]" />
        <img src={iphone7} alt="" className=" w-[148px] h-[148px]" />
        <img src={iphone8} alt="" className=" w-[148px] h-[148px]" />
      </Carousel>
      ;
    </div>
  );
};

export default MultiCarousel;
