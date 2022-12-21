import React, {useContext} from 'react';

import { Show } from './App';
import { AppContext } from './App';
import ShowComponent from './ShowComponent';

function Shows() {

    const {shows} = useContext(AppContext);

    return(
        <div className='container'>
            {shows?.map((show: Show)=>{
                return(
                    <ShowComponent title={show.title} overview={show.overview} poster={show.poster_path}/>
                );
            })}
        </div>
    );
}

export default Shows;