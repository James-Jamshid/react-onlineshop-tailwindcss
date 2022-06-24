import React from "react";
import { Link } from "react-router-dom";
import location from "./assets/location.png";
import categories from "./assets/Categories.png";
import search from "./assets/search.png";
import like from "./assets/like.png";
import cart from "./assets/cart.png";
import FontAwesomeIconSize from "./Material_uiPage/Call";
import AccountMenu from "./Material_uiPage/Profil";

const NavbarPage = () => {
  return (
    <div className="flex flex-col ">
      <div
        id="navbar"
        className="flex border h-[40px] items-center justify-between pl-[5%] pr-[5%]"
      >
        <a href="https://www.google.co.kr/maps/place/Tashkent+City+Park/@41.316655,69.2462901,17z/data=!4m12!1m6!3m5!1s0x38ae8b40d847941d:0x5765a18b352df71e!2sTashkent+City+Park!8m2!3d41.316655!4d69.2484841!3m4!1s0x38ae8b40d847941d:0x5765a18b352df71e!8m2!3d41.316655!4d69.2484841">
          <img src={location} alt="" className="flex" />
        </a>

        <Link to="/call" className="cursor-pointer ">
          <FontAwesomeIconSize />
        </Link>
      </div>
      <div className="flex  items-center shadow-lg h-[80px]">
        <div className="flex flex-1 items-center justify-evenly pl-[5%] gap-[5%]">
          <Link to="/logo" className="cursor-pointer ">
            <h1 className="text-[#8f40e7] text-2xl">Logo</h1>
          </Link>
          <Link to="/call" className="cursor-pointer ">
            <div
              id="navbar"
              className="flex rounded-[10px] w-[140px] h-[45px] items-center justify-center cursor-pointer hover:shadow-blue-500/50 "
            >
              <img src={categories} alt="" className="flex" />
            </div>
          </Link>
        </div>
        <div className="flex flex-1 items-center pr-[10%] pl-[5%]">
          <input
            type="search"
            placeholder="Search..."
            className="flex w-[500px] h-[45px] pl-2 rounded-l-xl bg-[#d1c0d1] "
          />

          <button className="flex w-[60px] h-[45px] items-center justify-center bg-[#C229BC] rounded-r-xl cursor-pointer  drop-shadow-2xl  hover:scale-100 hover:shadow-2xl hover:ease-in ">
            <img src={search} alt="" />
          </button>
        </div>
        <div className="flex flex-1 items-center justify-between pr-[5%]">
          <Link to="/favorite" className="cursor-pointer ">
            <img
              src={like}
              alt=""
              className="flex  hover:rounded-[50%] hover:scale-110 hover:bg-purple hover:shadow-lg hover:ease-in  "
            />
          </Link>
          <AccountMenu />
          <Link to="/cart" className="cursor-pointer ">
            <img
              src={cart}
              alt=""
              className="flex hover:rounded-[50%] hover:scale-110 hover:bg-purple hover:shadow-lg hover:ease-in "
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarPage;
