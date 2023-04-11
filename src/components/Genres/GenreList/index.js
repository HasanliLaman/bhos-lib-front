import React from "react";
import StyleGenreList from "./style";

const GenreList = ({ data, query, setQuery }) => {
  const onChangeCategory = (category) => {
    query.set("category", category);
    setQuery(query);
  };

  return (
    <StyleGenreList>
      <header>Genre</header>
      <form>
        {data &&
          data.data.data.doc.map((el) => (
            <div key={el._id} className="form-group">
              <input
                onChange={() => onChangeCategory(el.slug)}
                type="radio"
                id={el.slug}
                name="genre"
                value={el.slug}
              />
              <label htmlFor={el.slug}>{el.name}</label>
            </div>
          ))}
      </form>
    </StyleGenreList>
  );
};

export default GenreList;
