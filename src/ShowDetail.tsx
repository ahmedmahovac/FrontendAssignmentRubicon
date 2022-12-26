import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Show } from "./App";
import Details from "./Details";
import { Video, VideosData } from "./MovieDetail";

function ShowDetail() {
  const { id } = useParams();

  const [show, setShow] = useState<Show>();
  const [video, setVideo] = useState<Video>();

  useEffect(() => {
    // get show
    axios
      .get<Show>(
        `https://api.themoviedb.org/3/tv/${id}?api_key=2a6ffaa687fbf43de796d6fe17378efe&language=en-US`
      )
      .then((resShow) => {
        axios
          .get<VideosData>(
            `https://api.themoviedb.org/3/tv/${id}/videos?api_key=2a6ffaa687fbf43de796d6fe17378efe&language=en-US`
          )
          .then((resVideo) => {
            const videos = resVideo.data.results;
            setVideo(videos.length ? videos[0] : undefined); // mogu u isti state stavljat al moram onda mijenjat Movie interface
            setShow(resShow.data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Details
      id={show?.id}
      title={show?.name}
      poster_path={show?.poster_path}
      overview={show?.overview}
      video={video}
    />
  );
}

export default ShowDetail;
