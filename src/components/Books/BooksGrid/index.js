import React, { useEffect, useState } from "react";
import BookInfoContainer from "../BookInfo/BookInfoContainer";
import StyleBookGrid from "./style";

const BookGrid = ({ data, query }) => {
  const [filteredData, setFilteredData] = useState(data?.data.data.doc);
  const category = query.get("category");

  useEffect(() => {
    if (category)
      setFilteredData(
        data?.data.data.doc.filter((el) => el.category.slug === category)
      );
    else setFilteredData(data?.data.data.doc);
  }, [category, data?.data.data.doc]);

  return (
    <StyleBookGrid>
      {filteredData &&
        filteredData.map((el) => (
          <BookInfoContainer
            img={el.cover}
            id={el._id}
            key={el._id}
            name={el.title}
            author={el.author}
          />
        ))}
    </StyleBookGrid>
  );
};

export default BookGrid;
