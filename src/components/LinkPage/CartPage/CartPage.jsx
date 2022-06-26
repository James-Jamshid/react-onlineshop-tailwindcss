import React, { useState } from "react";
import { Link } from "react-router-dom";
import laptop from "../assets/laptop.png";

const CartPage = () => {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const increment = () => {
    setCount(count + 1);
    setPrice(price + 1500);
  };
  const decrement = () => {
    setCount(count - 1);
    setPrice(price - 1500);
  };

  return (
    <div className="flex flex-col p-24 gap-y-10">
      <h1>Main/Cart</h1>
      <h2>Cart products</h2>
      <div className="flex justify-evenly lg:flex-row sm:flex-col sm:gap-y-10  ">
        <div className="flex  lg:w-[857px] sm:w-auto h-[200px] rounded-xl bg-[#FFFFFF] shadow-lg items-center justify-between p-2">
          <div className="flex justify-between">
            <div className="flex">
              <img src={laptop} alt="" />
            </div>
            <div className="flex items-center flex-col gap-y-16 p-3">
              <h1> Name of the product</h1>
              <div className="flex">
                <button
                  className="flex w-[50px] h-[45px] rounded-l-lg bg-[#7007C8] text-[24px] items-center justify-center"
                  onClick={decrement}
                >
                  -
                </button>
                <h1 className="flex w-[50px] h-[45px] bg-[#d0cdcd] text-[24px]  items-center justify-center">
                  {count}
                </h1>
                <button
                  className="flex w-[50px] h-[45px] rounded-r-lg bg-[#7007C8] text-[24px]  items-center justify-center"
                  onClick={increment}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col gap-y-16">
              <button className=" text-[24px] text-[red]">x</button>
              <h1 className="text-[28px] text-bold text-[#712571] ">
                {price}$
              </h1>
            </div>
          </div>
        </div>

        <div className="flex w-[413px] h-auto rounded-lg bg-[#FFFFFF] shadow-lg flex-col p-5 ">
          <div className="flex border-b-2 items-center justify-between w-[100%] p-3">
            <h1 className="text-[#7007C8] text-[24px]">price</h1>
            <h1 className="text-[28px] text-bold text-[#712571] ">{price}$</h1>
          </div>
          <div className="flex border-b-2 items-center justify-between w-[100%] p-3">
            <h1>Discount</h1>
            <h1>-25%</h1>
          </div>
          <div className="flex border-b-2 items-center justify-between w-[100%] p-3">
            <h1>Discount</h1>
            <h1>-25%</h1>
          </div>
          <div className="flex border-b-2 items-center justify-between w-[100%] p-3">
            <h1>Discount</h1>
            <h1>-25%</h1>
          </div>
          <div className="flex border-b-2 items-center justify-between w-[100%] p-3">
            <h1>Discount</h1>
            <h1>-25%</h1>
          </div>
          <div className="flex pt-20">
            <Link to="/buy">
              <button id="Btn">Buy product</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
