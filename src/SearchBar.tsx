import React, {useContext} from 'react';

import { AppContext } from './App';

function SearchBar(){

    const {searchValue, setSearchValue} = useContext(AppContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue?.(e.target.value);
    }

    return(
        <div>
            <input
            className='search-bar'
            type="text"
            placeholder='search'
            value={searchValue}
            onChange={handleChange}
            />
        </div>
    );
}

export default SearchBar;