import React from 'react';
import './css/Recommendedtags.css';


let Recommendedtags = ()=>{
    let scrollRight = ()=>{
        document.getElementsByClassName("RecommendedTagOuter")[0].scrollLeft+=50;
    }
    
    let scrollLeft= ()=>{
        document.getElementsByClassName("RecommendedTagOuter")[0].scrollLeft-=50;
    }
    return (
        <React.Fragment>
            <div className="RecommendedTagMasterOuter">
            <button onClick={scrollLeft} id="LeftScroll">
            <span class="material-icons">
                keyboard_arrow_left
            </span>
            </button>
            <button  onClick={scrollRight} id="RightScroll">
            <span class="material-icons">
            keyboard_arrow_right
            </span>
            </button>
            <div className="RecommendedTagOuter">
            <span class="RecommendedTag">All</span>
            <span class="RecommendedTag">Songs</span>
            <span class="RecommendedTag">Movies</span>
            <span class="RecommendedTag">Mobiles</span>
            <span class="RecommendedTag">Fashion</span>
            <span class="RecommendedTag">LifeStyle</span>
            <span class="RecommendedTag">Bollywood</span>
            <span class="RecommendedTag">Current Update</span>
            <span class="RecommendedTag">Live</span>
            <span class="RecommendedTag">All</span>
            <span class="RecommendedTag">Songs</span>
            <span class="RecommendedTag">Movies</span>
            <span class="RecommendedTag">Mobiles</span>
            <span class="RecommendedTag">Fashion</span>
            <span class="RecommendedTag">LifeStyle</span>
            <span class="RecommendedTag">Bollywood</span>
            <span class="RecommendedTag">Current Update</span>
            <span class="RecommendedTag">Live</span>
            <span class="RecommendedTag">All</span>
            <span class="RecommendedTag">Songs</span>
            <span class="RecommendedTag">Movies</span>
            <span class="RecommendedTag">Mobiles</span>
            <span class="RecommendedTag">Fashion</span>
            <span class="RecommendedTag">LifeStyle</span>
            <span class="RecommendedTag">Bollywood</span>
            <span class="RecommendedTag">Current Update</span>
            <span class="RecommendedTag">Live</span>
            <span class="RecommendedTag">All</span>
            <span class="RecommendedTag">Songs</span>
            <span class="RecommendedTag">Movies</span>
            <span class="RecommendedTag">Mobiles</span>
            <span class="RecommendedTag">Fashion</span>
            <span class="RecommendedTag">LifeStyle</span>
            <span class="RecommendedTag">Bollywood</span>
            <span class="RecommendedTag">Current Update</span>
            <span class="RecommendedTag">Live</span>
            <span class="RecommendedTag">All</span>
            <span class="RecommendedTag">Songs</span>
            <span class="RecommendedTag">Movies</span>
            <span class="RecommendedTag">Mobiles</span>
            <span class="RecommendedTag">Fashion</span>
            <span class="RecommendedTag">LifeStyle</span>
            <span class="RecommendedTag">Bollywood</span>
            <span class="RecommendedTag">Current Update</span>
            <span class="RecommendedTag">Live</span>
            <span class="RecommendedTag">All</span>
            <span class="RecommendedTag">Songs</span>
            <span class="RecommendedTag">Movies</span>
            <span class="RecommendedTag">Mobiles</span>
            <span class="RecommendedTag">Fashion</span>
            <span class="RecommendedTag">LifeStyle</span>
            <span class="RecommendedTag">Bollywood</span>
            <span class="RecommendedTag">Current Update</span>
            <span class="RecommendedTag">Live</span>
            </div>
            </div>
        </React.Fragment>
    );
}



export default Recommendedtags;