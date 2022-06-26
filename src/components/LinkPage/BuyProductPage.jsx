import React from "react";

const BuyProductPage = () => {
  return (
    <div className="flex flex-col gap-y-10 p-24">
      <div className="flex items-start">
        <h1>Main/Cart/Buy product</h1>
      </div>

      <div className="flex  flex-col items-center gap-y-10">
        <div className="flex">
          <h2>Buy product</h2>
        </div>
        <div className="lg:grid lg:grid-cols-2 sm:flex sm:flex-col gap-3 ">
          <input id="input" type="text" placeholder="Name" />
          <input id="input" type="tel" placeholder="Phone number" />
          <input id="input" type="email" placeholder="Email" />
          <input id="input" type="text" placeholder="Address" />
        </div>
        <div className="flex">
          <button id="Btn">Buy product</button>
        </div>
      </div>
    </div>
  );
};

export default BuyProductPage;
