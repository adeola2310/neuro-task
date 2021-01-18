import React  from 'react';
import './Search.scss';

const Search = ({searchText, handleChange})=>{


    return (
        <React.Fragment>
        {/* <i className="fas fa-search"/> */}
        <input
        className="search"
        aria-label='Search item'
        type="text"
        autoComplete='off'
        placeholder="Search an item"
        name="search"
        value={searchText}
        onChange={handleChange}
        />
        </React.Fragment>
       
    )
}

export default Search;