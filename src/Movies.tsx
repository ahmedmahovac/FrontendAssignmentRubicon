import React, {useContext, useEffect} from 'react';

import { AppContext, Movie} from './App';

import MovieComponent from './MovieComponent';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

function Movies(){

    const {movies} = useContext(AppContext);
    console.log(movies);
    return(
        <div>
            <NavBar/>
            <SearchBar/>
            <div className='container'>
            {movies?.map((movie: Movie)=>{
                return(
                    <MovieComponent title={movie.title} overview={movie.overview} poster={movie.poster_path}/>
                );
            })}
            </div>
        </div>
    );
}

export default Movies;
