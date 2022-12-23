import React from 'react';

type Props = {
    title: string,
    overview: string,
    poster: string
}

function Show(props: Props){
    return(
        <div className='card'>
            <img src={props.poster == null ? '' : 'https://image.tmdb.org/t/p/w500/'+props.poster } alt="name"/>
            <h3>{props.title}</h3>
        </div>
    );
}


export default Show;