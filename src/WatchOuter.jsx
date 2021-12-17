import React from 'react';
import './css/Watchouter.css';
import Watchvideo from './Watchvideo.jsx';
import Recommendedtags from './Recommendedtags.jsx';

let WatchOuter = ()=>{
    return (
        <React.Fragment>
            <div className="MasterWatchOuter">
                <div className="LeftWatchOuter">
                    <Watchvideo/>
                </div>
                <div className="RightWatchOuter">
                    <Recommendedtags/>
                </div>
            </div>
        </React.Fragment>
    );
}




export default WatchOuter;