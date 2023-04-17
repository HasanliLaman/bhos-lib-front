import React from "react";
import StyleSearchInput from "./style";
import searchIcon from "../../../../assets/images/icon-search.svg";

const SearchInput = ({ input, handleInputChange }) => {
  return (
    <StyleSearchInput>
      <input
        value={input}
        onChange={handleInputChange}
        id="search"
        placeholder="Search books..."
      />
      <label htmlFor="search">
        <img alt="search" src={searchIcon} />
      </label>
    </StyleSearchInput>
  );
};

export default SearchInput;
