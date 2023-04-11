import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBookInfo } from "../../server";
import BookInfoContainer from "../../components/BookInfo/BookInfoContainer";
import Banner from "../../components/UI/Banner";

const BookDetails = () => {
  const { id } = useParams();
  const { data } = useQuery(["bookInfo"], () => getBookInfo(id));

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "BHOS LIB | Books";
  }, []);

  return (
    <div>
      <Banner current="Book Details" />
      {data && <BookInfoContainer data={data} />}
    </div>
  );
};

export default BookDetails;
