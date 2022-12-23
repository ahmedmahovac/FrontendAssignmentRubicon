import React from "react";

type DetailsProps = {
  poster_path?: string;
  title?: string;
  overview?: string;
};

function Details(props: DetailsProps) {
  const { poster_path, title, overview } = props;
  return (
    <div className="detailsContainer">
      <button>Back</button>
      <img
        src={
          poster_path == null
            ? ""
            : "https://image.tmdb.org/t/p/w400/" + poster_path
        }
        alt="title"
      />
      <h1>{title}</h1>
      <h3>{overview}</h3>
    </div>
  );
}

export default Details;
