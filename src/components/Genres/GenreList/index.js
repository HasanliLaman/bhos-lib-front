import React from "react";
import Loading from "../../UI/Loading";
import StyleGenreList from "./style";

const GenreList = ({ data, query, setQuery }) => {
  const onDeselectCategory = (category) => {
    if (query.get("category") === category) {
      query.delete("category");
      setQuery(query);
    }
  };

  const onChangeCategory = (category) => {
    query.set("category", category);
    setQuery(query);
  };

  return (
    <StyleGenreList>
      <header>Genre</header>
      {!data && <Loading />}
      <form>
        {data &&
          data.data.data.doc.map((el) => (
            <div key={el._id} className="form-group">
              <input
                onClick={() => onDeselectCategory(el.slug)}
                onChange={() => onChangeCategory(el.slug)}
                type="radio"
                id={el.slug}
                name="genre"
                value={el.slug}
                checked={query.get("category") === el.slug}
              />
              <label htmlFor={el.slug}>{el.name}</label>
            </div>
          ))}
      </form>
    </StyleGenreList>
  );
};

export default GenreList;
