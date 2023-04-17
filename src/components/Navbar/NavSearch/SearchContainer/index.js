import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import SearchInput from "../SearchInput";
import SearchResult from "../SearchResult";
import StyleSearchContainer from "./style";
import { searchBook } from "../../../../server";

const SearchContainer = () => {
  const { data, mutate } = useMutation({ mutationFn: searchBook });
  const [input, setInput] = useState("");
  const [timerId, setTimerId] = useState();

  const handleInputChange = (e) => {
    clearTimeout(timerId);
    setInput(e.target.value);
    const timer = setTimeout(function () {
      if (e.target.value) mutate(e.target.value);
    }, 500);
    setTimerId(timer);
  };

  return (
    <StyleSearchContainer>
      <SearchInput input={input} handleInputChange={handleInputChange} />
      {data && input && <SearchResult data={data.data.data.doc} />}
    </StyleSearchContainer>
  );
};

export default SearchContainer;
