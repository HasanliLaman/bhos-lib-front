import React from "react";
import BookInfoContainer from "../BookInfo/BookInfoContainer";
import StyleMostViewed from "./style";

const MostViewed = ({ data }) => {
  return (
    <StyleMostViewed>
      <h2>Most Viewed</h2>
      <ul>
        {data &&
          data.data.data.doc
            .filter((el, i) => i > 5 && i < 9)
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
    </StyleMostViewed>
  );
};

export default MostViewed;
