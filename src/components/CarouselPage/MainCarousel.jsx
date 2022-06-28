import React from "react";

import carousel1 from "../HomePage/assets/Carousel.png";
import carousel2 from "../HomePage/assets/Carousel.png";
import carousel3 from "../HomePage/assets/Carousel.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const MainCarousel = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={carousel1} />
        </div>
        <div>
          <img src={carousel2} />
        </div>
        <div>
          <img src={carousel3} />
        </div>
      </Carousel>
    </div>
  );
};

export default MainCarousel;
