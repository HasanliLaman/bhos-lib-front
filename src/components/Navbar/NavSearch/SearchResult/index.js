import React from "react";
import StyleSearchResult from "./style";
import book from "../../../../assets/images/book-cover.jpg";
import { Link } from "react-router-dom";

const SearchResult = () => {
  return (
    <StyleSearchResult>
      <ul>
        <li>
          <Link to="/books">
            <img src={book} alt="book cover" />
            <p>The Story of Success</p>
            <span>Laman Hasanli</span>
          </Link>
        </li>
        <li>
          <Link to="/books">
            <img src={book} alt="book cover" />
            <p>The Story of Success</p>
            <span>Laman Hasanli</span>
          </Link>
        </li>
      </ul>
      {/* <p>No results</p> */}
    </StyleSearchResult>
  );
};

export default SearchResult;
