import React from 'react';
import './css/Video.css';


let Video = ()=>{
    return  (
        <React.Fragment>
            <section class="Video">
                <div class="BannerImage"></div>
                <div class="VideoContaintInfo">
                    <img src="https://cdn.freelogovectors.net/wp-content/uploads/2016/12/instagram-logo-1.png" className="ChannelPic" alt="ChannelPic"/>
                    <div className="VideoInnerInfo">
                    <p className="VideoTitle">How to Clean Your Smartphone *5 Tricks*</p>
                    <div className="ChannelInfo">
                        <div class="ChannelInfoNameOuter">
                        <span>Channel Name</span>
                        <span class="material-icons ChnnelBlueTic">
                        check_circle
                        </span>
                        </div>

                        <div className="VideoInfo">
                            <span>545K Views</span>
                            <span>
                            <span class="material-icons UploadTime">
                            fiber_manual_record
                            </span>
                             2 hour ago</span>
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



export default Video;