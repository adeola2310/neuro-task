import React  from 'react';
import './Search.scss';

const Search = ({searchText, handleChange, itemData, result})=>{


   

    return (
        <div>
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
        {
            result && 
            <div className="results">
            <p>{itemData?.length} results found for "{searchText}"</p>
            </div>
        }
        </div>
       
    )
}

export default Search;