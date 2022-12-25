import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

type Props = {
  id: number;
  title: string;
  overview: string;
  poster?: string;
};

function Card(props: Props) {
  const { id, title, overview, poster } = props;

  const navigate = useNavigate();
  const location = useLocation();

  function handleCardClick(event: React.MouseEvent<HTMLDivElement>) {
    navigate(location.pathname + "/" + id);
  }

  return (
    <div onClick={handleCardClick} className="Card">
      <img
        className="ImageCard"
        src={poster == null ? "" : "https://image.tmdb.org/t/p/w500/" + poster}
        alt="title"
      />
      <h3 className="CardTitle">{title}</h3>
    </div>
  );
}

export default Card;
