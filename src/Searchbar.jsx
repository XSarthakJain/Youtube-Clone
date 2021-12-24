import React, { useState, useContext, createContext} from 'react';
import Videosearchcontext from './context/Videosearchcontext';

import './css/SearchBar.css';



let SearchBar = ()=>{
    const context = useContext(Videosearchcontext);
    const {updateSearchValue} = context;
    let [SearchValue,SearchUpdate] = useState();
    let submitResponse = (e)=>{
        e.preventDefault();     
        updateSearchValue(SearchValue);
    }
    

    

    return (
        <React.Fragment>
            <form className="SearchForm">
                <input type="text" placeholder="Search" value={SearchValue} onChange={(event)=>SearchUpdate(event.target.value)}></input>
                <input type="submit" class="material-icons" value="search" onClick={(event)=>submitResponse(event)}></input>
            </form>
        </React.Fragment>
    );
}

export default SearchBar;