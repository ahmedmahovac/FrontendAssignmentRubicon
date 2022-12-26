import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Video } from "./MovieDetail";

type DetailsProps = {
  poster_path?: string;
  title?: string;
  name?: string;
  overview?: string;
  video?: Video;
};

function Details(props: DetailsProps) {
  const [loading, setLoading] = useState(true);
  const { poster_path, title, overview, video } = props;
  console.log(video?.site);
  const navigate = useNavigate();

  function handleBackClick() {
    navigate(-1);
  }

  function handleImageVideoLoadSuccess() {
    setLoading(false);
  }

  function handleImageVideoLoadError() {
    setLoading(false);
  }

  return (
    <div className="detailsContainer">
      <div className="btnBox">
        <button type="button" onClick={handleBackClick} className="btnBack">
          Back
        </button>
      </div>
      {video ? (
        <iframe
          title="trailer video"
          className="video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src={
            (video.site === "YouTube"
              ? "https://www.youtube.com/embed/"
              : "//player.vimeo.com/video/") + video.key
          }
          onLoad={handleImageVideoLoadSuccess}
          onError={handleImageVideoLoadError}
        />
      ) : (
        <img
          src={
            poster_path == null
              ? "https://via.placeholder.com/500x753?text=No+Poster"
              : "https://image.tmdb.org/t/p/w400/" + poster_path
          }
          alt="title"
        />
      )}
      <h1>{title}</h1>
      <p>{overview}</p>
    </div>
  );
}

export default Details;
