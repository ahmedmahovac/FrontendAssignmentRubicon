import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Show } from "./App";
import Details from "./Details";

function ShowDetail() {
  const { id } = useParams();

  const [show, setShow] = useState<Show>();

  useEffect(() => {
    // get show
    axios
      .get<Show>(
        `https://api.themoviedb.org/3/tv/${id}?api_key=2a6ffaa687fbf43de796d6fe17378efe&language=en-US`
      )
      .then((res) => {
        setShow(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <Details {...show} />;
}

export default ShowDetail;
