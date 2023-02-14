import React from "react";
import SearchInput from "../SearchInput";
import SearchResult from "../SearchResult";
import StyleSearchContainer from "./style";

const SearchContainer = () => {
  return (
    <StyleSearchContainer>
      <SearchInput />
      <SearchResult />
    </StyleSearchContainer>
  );
};

export default SearchContainer;
