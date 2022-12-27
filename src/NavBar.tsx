import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { AppContext } from "./App";

function NavBar() {
  const { selectedTab, setSelectedTab } = useContext(AppContext);

  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/movies"
            onClick={() => {
              setSelectedTab?.(0);
            }}
            className={selectedTab === 0 ? "selectedTab" : ""}
          >
            Movies
          </Link>
        </li>
        <li>
          <Link
            to="/shows"
            onClick={() => {
              setSelectedTab?.(1);
            }}
            className={selectedTab === 1 ? "selectedTab" : ""}
          >
            TV Shows
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
