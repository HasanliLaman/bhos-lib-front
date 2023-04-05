import React from "react";
import BookInfoContainer from "../../components/BookInfo/BookInfoContainer";
import Banner from "../../components/UI/Banner";

const BookDetails = () => {
  return (
    <div>
      <Banner current="Book Details" />
      <BookInfoContainer />
    </div>
  );
};

export default BookDetails;
