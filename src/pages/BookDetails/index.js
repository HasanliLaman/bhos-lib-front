import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBookInfo } from "../../server";
import BookInfoContainer from "../../components/BookInfo/BookInfoContainer";
import Banner from "../../components/UI/Banner";
import Loading from "../../components/UI/Loading";

const BookDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isRefetching } = useQuery(["bookInfo"], () =>
    getBookInfo(id)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "BHOS LIB | Books";
  }, []);

  return (
    <div>
      <Banner current="Book Details" />
      {(isLoading || isRefetching) && <Loading style={{ padding: "6rem 0" }} />}
      {!isLoading && !isRefetching && data && <BookInfoContainer data={data} />}
    </div>
  );
};

export default BookDetails;
