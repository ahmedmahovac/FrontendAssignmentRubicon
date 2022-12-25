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
  console.log(video?.site);
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
        <div>
          <iframe
            title="trailer video"
            className="video"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            src={
              (video.site === "YouTube"
                ? "https://www.youtube.com/embed/"
                : "https://vimeo.com/") + video.key
            }
          />
        </div>
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
