import React from "react";
import { useNavigate } from "react-router-dom";

import { Video } from "./MovieDetail";

type DetailsProps = {
  poster_path?: string;
  title?: string;
  overview?: string;
  video?: Video;
};

function Details(props: DetailsProps) {
  const { poster_path, title, overview, video } = props;

  const navigate = useNavigate();

  function handleBackClick() {
    navigate(-1);
  }

  return (
    <div className="detailsContainer">
      <button type="button" onClick={handleBackClick} className="btnBack">
        Back
      </button>
      {video ? (
        <video
          src={
            (video.type === "Youtube"
              ? "https://www.youtube.com/watch?v="
              : "https://vimeo.com/") + video.key
          }
        />
      ) : (
        <img
          src={
            poster_path == null
              ? ""
              : "https://image.tmdb.org/t/p/w400/" + poster_path
          }
          alt="title"
        />
      )}
      <h1>{title}</h1>
      <h3>{overview}</h3>
    </div>
  );
}

export default Details;
