import React from "react";

const FilmListHeading = (props) => {
  return (
    <div className="col">
      <h1>Title: {props.heading}</h1>
    </div>
  );
};

export default FilmListHeading;
