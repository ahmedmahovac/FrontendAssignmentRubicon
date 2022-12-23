import React from 'react';

type Props = {
    title: string,
    overview: string,
    poster?: string
}

function Movie(props: Props){
    return(
        <div className='card'>
            <img src={props.poster == null ? '' : 'https://image.tmdb.org/t/p/w400/'+props.poster} alt="title"/>
            <h3>{props.title}</h3>
        </div>
    );
}


export default Movie;