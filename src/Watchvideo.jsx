import React,{ useContext } from 'react';
import Preview from './media/video1.mp4';
import './css/Watchvideo.css';
import Watchcontentinfo from './Watchcontentinfo.jsx'
import Videosearchcontext from './context/Videosearchcontext';
import { useParams } from 'react-router-dom';
let Watchvideo = ()=>{
    let { vname } = useParams();
    let IframeVideo = "https://www.youtube.com/embed/"+vname;
    return (
        <React.Fragment>
            {/* <video autoplay controls className="WatchVideoElement">
                <source src={Preview} type="video/mp4"/>
                <source src="{Preview}.ogg" type="video/ogg"/>
                Your browser does not support the video tag.
            </video> */}
            <iframe id="player" type="text/html" className="WatchVideoElement"
            src={IframeVideo}
            frameborder="0"></iframe>
            <Watchcontentinfo/>
        </React.Fragment>
    )
}




export default Watchvideo;