import React, {useState, createContext, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Movies from './Movies';
import Shows from './Shows';


axios.defaults.baseURL = 'https://api.themoviedb.org';

interface AppContextInterface {
  searchValue: string,
  setSearchValue?: (value: string) => void,
  selectedTab: number,
  setSelectedTab?: (index: number) => void,
  movies?: Movie[],
  shows?: Show[]
}

export interface Movie {
  id: number,
  title: string,
  overview: string,
  poster_path: string,
  video: boolean
}

export interface Show {
  id: number,
  title: string,
  overview: string,
  poster_path: string,
  video: boolean
}

interface GetSearchedMoviesData{
  results: Movie[]
}

interface GetSearchedShowsData{
  results: Show[]
}


export const AppContext = createContext<AppContextInterface>({searchValue: "", selectedTab: 0});

let timer : NodeJS.Timeout;

function searchMovies(searchValue: string) {
  axios.get<GetSearchedMoviesData>("/3/search/movie?api_key=2a6ffaa687fbf43de796d6fe17378efe&language=en-US&query="+searchValue+"&page=1&include_adult=false")
  .then(res=>{
    let movies = res.data.results;
  })
}

function searchShows(searchValue: string) {
  axios.get<GetSearchedShowsData>("/3/search/tv?api_key=2a6ffaa687fbf43de796d6fe17378efe&language=en-US&query="+searchValue+"&page=1&include_adult=false")
  .then(res=>{
    let shows = res.data.results;
  })
}

function App() {

  const [searchValue, setSearchValue] = useState("");
  const [selectedTab, setSelectedTab] = useState(0);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(()=>{
    clearTimeout(timer);
    if(searchValue.length>=3){
      timer = setTimeout(()=>{
        console.log("send api request now");
        if(selectedTab==0){
          searchMovies(searchValue);
        }
        else if(selectedTab==1){
          searchShows(searchValue);
        }
      }, 1000); // call specified function after 1s
    }
  }, [searchValue]);

  useEffect(()=>{
    if(selectedTab==0){
      searchMovies(searchValue);
    }
    else if(selectedTab==1){
      searchShows(searchValue);
    }
  }, [selectedTab]);

  const appContext : AppContextInterface = {
    searchValue: searchValue,
    setSearchValue: setSearchValue,
    selectedTab: selectedTab,
    setSelectedTab: setSelectedTab,
    movies: movies,
    shows: shows
  }

  return (
    <AppContext.Provider value={appContext}>
      <Router>
        <div className="App">
          <NavBar/>
          <SearchBar/>
          <Routes>
            <Route path='movies' element={<Movies/>}/>
            <Route path='shows' element={<Shows/>}/>
          </Routes>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
