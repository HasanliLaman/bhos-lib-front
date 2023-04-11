import React from "react";
import Header from "../../UI/Header";
import BookInfoContainer from "../BookInfo/BookInfoContainer";
import StyleBestRated from "./style";

const BestRated = ({ data }) => {
  return (
    <StyleBestRated>
      <Header title="Best Rated" to="/books" />
      <ul>
        {data &&
          data.data.data.doc
            .filter((el, i) => i < 6)
            .map((el) => (
              <li key={el._id}>
                <BookInfoContainer
                  img={el.cover}
                  id={el._id}
                  name={el.title}
                  author={el.author}
                  isHorizontal={true}
                />
              </li>
            ))}
      </ul>
    </StyleBestRated>
  );
};

export default BestRated;
