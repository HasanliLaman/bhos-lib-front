import React from "react";
import StyleSearchResult from "./style";
import book from "../../../../assets/images/book-cover.jpg";

const SearchResult = () => {
  return (
    <StyleSearchResult>
      <ul>
        <li>
          <a href="">
            <img src={book} alt="book cover" />
            <p>The Story of Success</p>
            <span>Laman Hasanli</span>
          </a>
        </li>
        <li>
          <a href="">
            <img src={book} alt="book cover" />
            <p>The Story of Success</p>
            <span>Laman Hasanli</span>
          </a>
        </li>
      </ul>
      {/* <p>No results</p> */}
    </StyleSearchResult>
  );
};

export default SearchResult;
