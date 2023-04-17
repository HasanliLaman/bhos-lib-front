import React from "react";
import StyleSearchResult from "./style";
import { Link } from "react-router-dom";

const SearchResult = ({ data }) => {
  console.log(data);
  return (
    <StyleSearchResult>
      {!!data.length && (
        <ul>
          {data.map((el) => (
            <li key={el._id}>
              <Link to={`/books/${el._id}`}>
                <img src={el.cover} alt="book cover" />
                <p>{el.title}</p>
                <span>{el.author}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {!data.length && <p>No results</p>}
    </StyleSearchResult>
  );
};

export default SearchResult;
