import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBox = () => {
  return (
    <div>
      <div id="box">
        <input type="checkbox" id="check" />
        <div id="search-box">
          <input type="text" placeholder="Type here..." />
          <label for="check" id="icon">
            <BiSearch />
          </label>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
