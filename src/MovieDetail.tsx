import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Movie } from "./App";
import Details from "./Details";

function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    // get movie
    axios
      .get<Movie>(
        `https://api.themoviedb.org/3/movie/${id}?api_key=2a6ffaa687fbf43de796d6fe17378efe&language=en-US`
      )
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return <Details {...movie} />;
}

export default MovieDetail;
