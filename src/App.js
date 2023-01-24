import "./App.css";
import React, { useEffect, useState } from "react";
import FilmList from "./components/FilmList";
import "bootstrap/dist/css/bootstrap.min.css";
import FilmListHeading from "./components/FilmListHeaading";
import SearchBox from "./components/SearchBox";

const App = () => {
  const [films, setFilms] = useState([]);

  const [searchFilm, setSearchFilm] = useState("");

  const getFilmRequest = async (searchFilm) => {
    const url = `http://www.omdbapi.com/?s=${searchFilm}&apikey=b2cd408e`;
    const response = await fetch(url);
    const responseJson = await response.json();
    //console.log(responseJson);

    if (responseJson.Search) {
      setFilms(responseJson.Search);
    }
  };

  useEffect(() => {
    getFilmRequest(searchFilm);
  }, [searchFilm]);

  return (
    <div className="App container-fluid film-css">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <FilmListHeading heading={searchFilm} />
        <SearchBox searchFilm={searchFilm} setSearchFilm={setSearchFilm} />
      </div>
      <div className="row">
        <FilmList films={films} />
      </div>
    </div>
  );
};

export default App;
