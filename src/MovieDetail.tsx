import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Movie } from "./App";
import Details from "./Details";

export interface Video {
  site: string;
  type: string;
  key: string;
}

export interface VideosData {
  results: Video[];
}

function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState<Movie>();
  const [video, setVideo] = useState<Video>();

  useEffect(() => {
    console.log(video);
  }, [video]);

  useEffect(() => {
    // get movie
    axios
      .get<Movie>(
        `https://api.themoviedb.org/3/movie/${id}?api_key=2a6ffaa687fbf43de796d6fe17378efe&language=en-US`
      )
      .then((resMovie) => {
        axios
          .get<VideosData>(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=2a6ffaa687fbf43de796d6fe17378efe&language=en-US`
          )
          .then((resVideo) => {
            const videos = resVideo.data.results.filter((video: Video) => {
              return video.type === "Trailer";
            });
            setVideo(videos.length ? videos[0] : undefined); // mogu u isti state stavljat al moram onda mijenjat Movie interface
            setMovie(resMovie.data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return <Details {...movie} video={video} />; // ako promijenim redoslijed onda
}

export default MovieDetail;
