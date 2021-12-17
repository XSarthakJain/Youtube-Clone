import React from 'react';
import Preview from './media/video1.mp4';
import './css/Watchvideo.css';
import Watchcontentinfo from './Watchcontentinfo.jsx'
let Watchvideo = ()=>{
    return (
        <React.Fragment>
            {/* <video autoplay controls className="WatchVideoElement">
                <source src={Preview} type="video/mp4"/>
                <source src="{Preview}.ogg" type="video/ogg"/>
                Your browser does not support the video tag.
            </video> */}
            <iframe id="player" type="text/html" className="WatchVideoElement"
            src="https://www.youtube.com/embed/Ly5EhJQKa0U"
            frameborder="0"></iframe>
            <Watchcontentinfo/>
        </React.Fragment>
    )
}




export default Watchvideo;