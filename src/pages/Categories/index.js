import React from "react";
import Banner from "../../components/UI/Banner";
import GenreContainer from "../../components/Genres/GenreContainer";

const Categories = () => {
  return (
    <div>
      <Banner current="Categories" />
      <GenreContainer />
    </div>
  );
};

export default Categories;
