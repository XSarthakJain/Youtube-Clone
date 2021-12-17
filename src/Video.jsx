import React from 'react';
import './css/Video.css';
import Videosdata from './Videosdata.jsx';
import preview from './media/Preview.mp4';
import {NavLink} from 'react-router-dom';

let VideoCard = (Vdata,ind)=>{
    let hoverImageData;
    let hoverImageDataNumber;
    let playVideoOnImage = (val)=>{ 
        if(hoverImageDataNumber){
        document.getElementsByClassName("BannerImage")[hoverImageDataNumber].innerHTML = hoverImageData;
        }
        let BannerImage = document.getElementsByClassName("BannerImage")[ind];
        hoverImageData = BannerImage.innerHTML;
        BannerImage.innerHTML = `<video width="220" height="140" controls autoplay style="z-index:1;">
        <source src=${preview} type="video/mp4">
        <source src="${preview}.ogg" type="video/ogg">
      Your browser does not support the video tag.
      </video>`
      hoverImageDataNumber = val;
    }

    let removeVideoOnImage = (val)=>{
        // alert("Remove Data"+val+""+hoverImageData);
        document.getElementsByClassName("BannerImage")[val].innerHTML = hoverImageData;
    }
    return (
        <React.Fragment>
        <NavLink exact to="/watch" style={{textDecoration: 'none'}}>
        <section class="Video">
            <div class="BannerImage" onMouseOver={()=>playVideoOnImage(ind)} onMouseLeave={()=>removeVideoOnImage(ind)}>
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
        </NavLink>
    </React.Fragment>
    );
}
let Video = ()=>{
    return  (
        Videosdata.map(VideoCard)
    );
}



export default Video;