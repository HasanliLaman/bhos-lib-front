import React, { useEffect } from "react";
import Banner from "../../components/UI/Banner";
import GenreContainer from "../../components/Genres/GenreContainer";

const Categories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "BHOS LIB | Categories";
  }, []);

  return (
    <div>
      <Banner current="Categories" />
      <GenreContainer />
    </div>
  );
};

export default Categories;
