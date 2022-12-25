import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

type Props = {
  id: number;
  title: string;
  overview: string;
  poster?: string;
};

function Card(props: Props) {
  const [loading, setLoading] = useState(true); // set some spinner for loading

  const { id, title, overview, poster } = props;

  const navigate = useNavigate();
  const location = useLocation();

  function handleCardClick(event: React.MouseEvent<HTMLDivElement>) {
    navigate(location.pathname + "/" + id);
  }

  function handleImageLoad() {
    setLoading(false);
  }

  function handleImageLoadError() {
    setLoading(false);
  }

  return (
    <div onClick={handleCardClick} className="Card">
      {loading ? <div className="loader"></div> : null}
      <img
        onLoad={handleImageLoad}
        onError={handleImageLoadError}
        className="ImageCard"
        src={
          poster == null
            ? "https://via.placeholder.com/500x753?text=No+Poster"
            : "https://image.tmdb.org/t/p/w500/" + poster
        }
        alt="title"
      />
      <h3 className="CardTitle">{title}</h3>
    </div>
  );
}

export default Card;
