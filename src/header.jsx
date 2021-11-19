import React from 'react';
import './css/header.css';
import logo from './media/Logo.PNG';
import SearchBar from './Searchbar.jsx';
let Header = ()=>{
    return(
    <React.Fragment>
    <header>
            <span className="material-icons headerHamburger">
                menu
            </span>
            <span className="headerLogo">
                <img src={logo}></img>
            </span>
            <div className="OuterHeaderSearchBar">
            <span className="HeaderSearchBar">
                <SearchBar></SearchBar>
            </span>
            </div>
            <span>
                <span class="material-icons SeachMic">
                    mic
                </span>
            </span>

            <div className="headerRightOptions">
                <span class="material-icons">
                videocam
                </span>

                <span class="material-icons">
                apps
                </span>

                <span class="material-icons">
                notifications
                </span>
            </div>
            <img src="https://cocainemodels.es/wp-content/uploads/2018/12/40-years-jahre-become-a-model-werden-best-ager-tipps-hilfe-modeling-agency.jpg" className="profilePic" alt="ProfilePic"></img>

    </header>
    </React.Fragment>
    );
}

export default Header;