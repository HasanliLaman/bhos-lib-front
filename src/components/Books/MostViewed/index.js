import React from "react";
import BookInfoContainer from "../BookInfo/BookInfoContainer";
import StyleMostViewed from "./style";

const MostViewed = () => {
  return (
    <StyleMostViewed>
      <h2>Most Viewed</h2>
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
      </ul>
    </StyleMostViewed>
  );
};

export default MostViewed;
