import React from "react";

import carousel1 from "../HomePage/assets/Carousel.png";
import carousel2 from "../HomePage/assets/Carousel.png";
import carousel3 from "../HomePage/assets/Carousel.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const MainCarousel = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={carousel1} />
        </div>
        <div>
          <Link className="cursor-pointer" to="/cart">
            <img src={carousel2} />
          </Link>
        </div>
        <div>
          <Link className="cursor-pointer" to="/cart">
            <img src={carousel3} />
          </Link>
        </div>
      </Carousel>
    </div>
  );
};

export default MainCarousel;
