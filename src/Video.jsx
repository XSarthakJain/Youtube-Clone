import React from 'react';
import './css/Video.css';
import Videosdata from './Videosdata.jsx';

let VideoCard = (Vdata)=>{
    return (
        <React.Fragment>
        <section class="Video">
            <div class="BannerImage">
                <img src={Vdata.BannerImage} alt="BannerImage"/>
            </div>
            <div class="VideoContaintInfo">
                <div className="ChannelPicOuter">
                <img src={Vdata.ChannelPic} className="ChannelPic" alt="ChannelPic"/>
                </div>
                <div className="VideoInnerInfo">
                <p className="VideoTitle">{Vdata.VideoTitle}</p>
                <div className="ChannelInfo">
                    <div class="ChannelInfoNameOuter">
                    <span>{Vdata.ChannelName}</span>
                    <span class="material-icons ChnnelBlueTic">
                    check_circle
                    </span>
                    </div>

                    <div className="VideoInfo">
                        <span>{Vdata.Views}</span>
                        <span>
                        <span class="material-icons UploadTime">
                        fiber_manual_record
                        </span>
                         {Vdata.UploadTime}
                         </span>
                    </div>

                </div>
                </div>
                <span className="MoreVert">
                    <span class="material-icons">
                    more_vert
                    </span>
                </span>
            </div>
        </section>
    </React.Fragment>
    );
}
let Video = ()=>{
    return  (
        Videosdata.map(VideoCard)
    );
}



export default Video;