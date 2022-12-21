import React, {useContext} from 'react';

import { AppContext, Movie} from './App';

import MovieComponent from './MovieComponent';

function Movies(){
    const {movies} = useContext(AppContext);
    return(
        <div className='container'>
            {movies?.map((movie: Movie)=>{
                return(
                    <MovieComponent title={movie.title} overview={movie.overview} poster={movie.poster_path}/>
                );
            })}
        </div>
    );
}

export default Movies;
