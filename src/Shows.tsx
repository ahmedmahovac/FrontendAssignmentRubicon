import React, { useContext, useEffect } from "react";

import { Show } from "./App";
import { AppContext } from "./App";
import Card from "./Card";

import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

function Shows() {
  const { shows, selectedTab, setSelectedTab } = useContext(AppContext);

  useEffect(() => {
    if (selectedTab !== 1) {
      setSelectedTab?.(1);
    }
  }, []);

  return (
    <div>
      <NavBar />
      <SearchBar />
      <div className="CardsContainer">
        {shows?.map((show: Show) => {
          return (
            <Card
              key={show.id}
              id={show.id}
              title={show.name}
              overview={show.overview}
              poster={show.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Shows;
