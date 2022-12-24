import React, { useContext, useEffect } from "react";

import { AppContext, Movie } from "./App";

import Card from "./Card";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

function Movies() {
  const { movies } = useContext(AppContext);
  return (
    <div>
      <NavBar />
      <SearchBar />
      <div className="container">
        {movies?.map((movie: Movie) => {
          return (
            <Card
              key={movie.id}
              id={movie.id}
              title={movie.title}
              overview={movie.overview}
              poster={movie.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Movies;
