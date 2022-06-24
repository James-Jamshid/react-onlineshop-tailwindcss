import React from "react";
import { Link } from "react-router-dom";
import data from "./sports.json";
console.log("data:", data);

const MappingPage = ({ value }) => {
  return (
    <div className="flex items-center justify-evenly gap-4">
      <div className="flex flex-col p-3 gap-y-2 bg-[#FFFFFF] shadow-2xl rounded-2xl w-[303px] h-[365px]">
        <img
          src={value.node.banner}
          alt=""
          className="w-[224px] h-[190px] rounded-xl"
        />

        <p className="cursor-pointer hover:text-[darkgreen]">
          {value.node.name}
        </p>
        <p className="cursor-pointer hover:text-[darkgreen]">
          {value.node.model}
        </p>
        <p className="cursor-pointer text-purple hover:text-[darkgreen]">
          {value.node.price}
        </p>
        <Link to="/cart">
          <p className="cursor-pointer text-[white] border w-[273px] h-[40px] rounded-lg bg-[#842181] flex   items-center justify-center hover:shadow-2xl hover:bg-[darkgreen]">
            {value.node.add}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default MappingPage;
