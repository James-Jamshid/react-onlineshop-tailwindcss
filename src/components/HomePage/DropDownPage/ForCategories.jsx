import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import ComputerPage from "./ComputerPage";
import OvenPage from "./OvenPage";
import PhonePage from "./PhonePage";
const reducer = (state, action) => {
  switch (action.type) {
    case "PHONE":
      return {
        showPhone: !state.showPhone,
        showComputer: false,
        showOven: false,
      };
    case "COMPUTER":
      return {
        showPhone: false,
        showComputer: !state.showComputer,
        showOven: false,
      };
    case "OVEN":
      return {
        showPhone: false,
        showComputer: false,
        showOven: !state.howOven,
      };
  }
};

const ForCategories = () => {
  const [state, ditpatch] = useReducer(reducer, {
    showPhone: false,
    showComputer: false,
    showOven: false,
  });
  return (
    <div className="flex flex-col gap-y-1 rounded-lg p-1 bg-[white] ">
      <h4
        onClick={() => {
          ditpatch({ type: "PHONE" });
        }}
      >
        Phone
      </h4>
      <h4
        onClick={() => {
          ditpatch({ type: "COMPUTER" });
        }}
      >
        Computer
      </h4>
      <h4
        onClick={() => {
          ditpatch({ type: "OVEN" });
        }}
      >
        Oven
      </h4>
      <div className="flex absolute ml-32 mt-[-15px]">
        {state.showPhone && (
          <Link to="/phone">
            <PhonePage />
          </Link>
        )}
      </div>
      <div className="flex absolute ml-32 mt-[-15px]">
        {state.showComputer && <ComputerPage />}
      </div>
      <div className="flex absolute ml-32 mt-[-15px]">
        {state.showOven && <OvenPage />}
      </div>
    </div>
  );
};

export default ForCategories;
