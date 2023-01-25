import React from "react";
const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        placeholder="search movie's title ..."
        value={props.value}
        onChange={(e) => props.setSearchFilm(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
