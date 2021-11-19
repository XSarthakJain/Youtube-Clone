import React from 'react';
import './css/SearchBar.css';

let SearchBar = ()=>{
    return (
        <React.Fragment>
            <form className="SearchForm">
                <input type="text" placeholder="Search"></input>
                <input type="submit" class="material-icons" value="search"></input>
            </form>
        </React.Fragment>
    );
}

export default SearchBar;