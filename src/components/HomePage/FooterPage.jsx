import React from "react";
import telegram from "./assets/telegram.png";
import instagram from "./assets/instagram.png";
import facebook from "./assets/facebook.png";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <div
      id="navbar"
      className="flex h-[420px] items-center justify-between p-16 mt-16  "
    >
      <div className="flex">
        <Link to="/">
          <h1 className="text-[44px] text-[white]">Logo</h1>
        </Link>
      </div>
      <div className="flex flex-col gap-y-2">
        <Link to="/information">
          <h5>Information</h5>
        </Link>
        <Link to="/about">
          <h6>About company</h6>
        </Link>
        <Link to="/b2b">
          <h6>B2B</h6>
        </Link>
        <Link to="/payment">
          <h6>Payment</h6>
        </Link>
        <Link to="/delivery">
          <h6>Delivery</h6>
        </Link>
      </div>
      <div className="flex flex-col gap-y-2">
        <h5>Social media</h5>
        <div className="flex items-center justify-between ">
          <a href="https://telegram.org">
            <img
              src={telegram}
              alt=""
              className=" hover:rounded-[50%] hover:scale-110 hover:bg-purple hover:shadow-lg hover:ease-in "
            />
          </a>
          <a href="https://telegram.org">
            <h6>Telegram</h6>
          </a>
        </div>
        <div className="flex items-center justify-between">
          <a href="https://www.instagram.com">
            <img
              src={instagram}
              alt=""
              className=" hover:rounded-[50%] hover:scale-110 hover:bg-purple hover:shadow-lg hover:ease-in "
            />
          </a>
          <a href="https://www.instagram.com">
            <h6>instagram</h6>
          </a>
        </div>
        <div className="flex items-center justify-between">
          <a href="https://www.facebook.com">
            <img
              src={facebook}
              alt=""
              className=" hover:rounded-[50%] hover:scale-110 hover:bg-purple hover:shadow-lg hover:ease-in "
            />
          </a>
          <a href="https://www.facebook.com">
            <h6>facebook</h6>
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Link to="/payment">
          <h5>Payment</h5>
        </Link>
        <div className="flex items-center justify-between gap-2">
          <div className="flex  bg-[white] w-[100px] h-[50px] rounded-lg"></div>
          <div className="flex  bg-[white] w-[100px] h-[50px] rounded-lg"></div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex  bg-[white] w-[100px] h-[50px] rounded-lg"></div>
          <div className="flex  bg-[white] w-[100px] h-[50px] rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
