import React from "react";
import StyleGenreList from "./style";

const GenreList = () => {
  return (
    <StyleGenreList>
      <header>Genre</header>
      <form>
        <div className="form-group">
          <input type="radio" id="math" name="genre" value="HTML" />
          <label for="math">Math</label>
        </div>
        <div className="form-group">
          <input type="radio" id="physics" name="genre" value="HTML" />
          <label for="physics">Physics</label>
        </div>
        <div className="form-group">
          <input type="radio" id="geography" name="genre" value="HTML" />
          <label for="geography">Geography</label>
        </div>
        <div className="form-group">
          <input type="radio" id="fiction" name="genre" value="HTML" />
          <label for="fiction">Fiction</label>
        </div>
        <div className="form-group">
          <input type="radio" id="literature" name="genre" value="HTML" />
          <label for="literature">Literature</label>
        </div>
        <div className="form-group">
          <input type="radio" id="geology" name="genre" value="HTML" />
          <label for="geology">Geology</label>
        </div>
      </form>
    </StyleGenreList>
  );
};

export default GenreList;
