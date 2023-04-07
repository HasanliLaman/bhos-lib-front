import React from "react";
import Header from "../../UI/Header";
import BookInfoContainer from "../BookInfo/BookInfoContainer";
import StyleBestRated from "./style";

const BestRated = () => {
  return (
    <StyleBestRated>
      <Header title="Best Rated" to="/books" />
      <ul>
        <li>
          <BookInfoContainer isHorizontal={true} />
        </li>
        <li>
          <BookInfoContainer isHorizontal={true} />
        </li>
        <li>
          <BookInfoContainer isHorizontal={true} />
        </li>
        <li>
          <BookInfoContainer isHorizontal={true} />
        </li>
        <li>
          <BookInfoContainer isHorizontal={true} />
        </li>
        <li>
          <BookInfoContainer isHorizontal={true} />
        </li>
      </ul>
    </StyleBestRated>
  );
};

export default BestRated;
