import React, { useState, createContext, useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import Movies from "./Movies";
import Shows from "./Shows";
import MovieDetail from "./MovieDetail";
import ShowDetail from "./ShowDetail";
import Home from "./Home";

axios.defaults.baseURL = "https://api.themoviedb.org";

interface AppContextInterface {
  searchValue: string;
  setSearchValue?: (value: string) => void;
  selectedTab: number;
  setSelectedTab?: (index: number) => void;
  movies?: Movie[];
  shows?: Show[];
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

export interface Show {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
}

interface GetSearchedMoviesData {
  results: Movie[];
}

interface GetSearchedShowsData {
  results: Show[];
}

export const AppContext = createContext<AppContextInterface>({
  searchValue: "",
  selectedTab: 0,
});

let timer: NodeJS.Timeout;

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedTab, setSelectedTab] = useState(0);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [shows, setShows] = useState<Show[]>([]);

  const [topMovies, setTopMovies] = useState<Movie[]>([]);
  const [topShows, setTopShows] = useState<Show[]>([]);

  function searchMovies(searchValue: string) {
    setMovies([]);
    axios
      .get<GetSearchedMoviesData>(
        "/3/search/movie?api_key=2a6ffaa687fbf43de796d6fe17378efe&language=en-US&query=" +
          searchValue +
          "&page=1&include_adult=false"
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function searchShows(searchValue: string) {
    setShows([]); // msm da ce ovo radit, kad god searchamo prije nego sto uptuimo zahtjev, stavimo na prazan niz
    // opet se prikaze na milisekund, logicno. bolja je ona dolje varijanta al treba nesto skontat za da ostane top 10
    axios
      .get<GetSearchedShowsData>(
        "/3/search/tv?api_key=2a6ffaa687fbf43de796d6fe17378efe&language=en-US&query=" +
          searchValue +
          "&page=1&include_adult=false"
      )
      .then((res) => {
        setShows(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getTopMovies() {
    axios
      .get<GetSearchedMoviesData>(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=2a6ffaa687fbf43de796d6fe17378efe&language=en-US&page=1"
      )
      .then((res) => {
        setTopMovies(res.data.results.slice(0, 10));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getTopShows() {
    axios
      .get<GetSearchedShowsData>(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=2a6ffaa687fbf43de796d6fe17378efe&language=en-US&page=1"
      )
      .then((res) => {
        setTopShows(res.data.results.slice(0, 10));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    console.log("mounted");
    getTopMovies();
    getTopShows();
  }, []);

  // this happens only once, at mount time
  useEffect(() => {
    setMovies(topMovies);
  }, [topMovies]);

  useEffect(() => {
    setShows(topShows);
  }, [topShows]);

  useEffect(() => {
    clearTimeout(timer);
    if (searchValue.length >= 3) {
      timer = setTimeout(() => {
        console.log("send api request now");
        if (selectedTab === 0) {
          searchMovies(searchValue);
        } else if (selectedTab === 1) {
          searchShows(searchValue);
        }
      }, 1000); // call specified function after 1s
    } else {
      // set in case of both tabs
      setMovies(topMovies);
      setShows(topShows);
    }
  }, [searchValue]);

  useEffect(() => {
    if (selectedTab === 0) {
      if (searchValue) {
        //setShows([]); // ne radi ovo dobro u nekim slucajevima
      }
      //setMovies([]); // so the previous search for desired tab doesn't show up till app gets new search
      searchValue.length >= 3
        ? searchMovies(searchValue)
        : setMovies(topMovies);
    } else if (selectedTab === 1) {
      if (searchValue) {
        //setMovies([]);
      }
      //setShows([]); // so the previous search for desired tab doesn't show up till app gets new search
      searchValue.length >= 3 ? searchShows(searchValue) : setShows(topShows);
    }
  }, [selectedTab]);

  const appContext: AppContextInterface = {
    searchValue: searchValue,
    setSearchValue: setSearchValue,
    selectedTab: selectedTab,
    setSelectedTab: setSelectedTab,
    movies: movies,
    shows: shows,
  };

  return (
    <AppContext.Provider value={appContext}>
      <Router>
        <div className="MainContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="shows" element={<Shows />} />
            <Route path="movies/:id" element={<MovieDetail />} />
            <Route path="shows/:id" element={<ShowDetail />} />
          </Routes>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
