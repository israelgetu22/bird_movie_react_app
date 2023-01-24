import React from "react";

const FilmList = (props) => {
  return (
    <>
      {props.films.map((film, index) => (
        <div className="d-flex justify-content-start m-3">
          <img src={film.Poster} alt="Harry Potter" />
        </div>
      ))}
    </>
  );
};

export default FilmList;
