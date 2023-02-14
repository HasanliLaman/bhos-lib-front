import React from "react";
import StyleSearchInput from "./style";
import searchIcon from "../../../../assets/images/icon-search.svg";

const SearchInput = () => {
  return (
    <StyleSearchInput>
      <input id="search" placeholder="Search books..." />
      <label htmlFor="search">
        <img alt="search" src={searchIcon} />
      </label>
    </StyleSearchInput>
  );
};

export default SearchInput;
