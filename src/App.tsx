import React, {useState, createContext, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Movies from './Movies';
import Shows from './Shows';


interface AppContextInterface {
  searchValue: string,
  setSearchValue: (value: string) => void;
}



export const AppContext = createContext<AppContextInterface>({searchValue: "", setSearchValue: (value:string)=>{}});

let timer : NodeJS.Timeout;

function App() {

  const [searchValue, setSearchValue] = useState("");

  useEffect(()=>{
    clearTimeout(timer);
    if(searchValue.length>=3){
      timer = setTimeout(()=>{
        console.log("sad ce se poslat api zahtjev");
      }, 1000); // call specified function after 1s
    }
  }, [searchValue]);

  const appContext : AppContextInterface = {
    searchValue: searchValue,
    setSearchValue: setSearchValue
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
