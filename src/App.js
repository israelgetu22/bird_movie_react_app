import "./App.css";
import React, { useEffect, useState } from "react";
import FilmList from "./components/FilmList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [films, setFilms] = useState([]);

  const getFilmRequest = async () => {
    const url = "http://www.omdbapi.com/?s=harry potter&apikey=b2cd408e";
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setFilms(responseJson.Search);
  };

  useEffect(() => {
    getFilmRequest();
  }, []);

  return (
    <div className="App container-fluid film-css">
      <div className="row">
        <FilmList films={films} />
      </div>
    </div>
  );
};

export default App;
