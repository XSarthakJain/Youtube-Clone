import React,{ useContext, useEffect, useState } from 'react';
import './css/Video.css';
import preview from './media/Preview.mp4';
import {NavLink} from 'react-router-dom';
import Videosearchcontext from './context/Videosearchcontext';



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
        document.getElementsByClassName("BannerImage")[val].innerHTML = hoverImageData;
    }
    return (
        <React.Fragment>
        <NavLink exact to="/watch" style={{textDecoration: 'none'}}>
        <section class="Video" key={ind}>
            <div class="BannerImage" onMouseOver={()=>playVideoOnImage(ind)} onMouseLeave={()=>removeVideoOnImage(ind)}>
                <img src={Vdata.snippet.thumbnails.high.url} alt="BannerImage"/>
            </div>
            <div class="VideoContaintInfo">
                <div className="ChannelPicOuter">
                <img src="https://images.financialexpress.com/2018/11/t_series_logo.jpg" className="ChannelPic" alt="ChannelPic"/>
                </div>
                <div className="VideoInnerInfo">
                <p className="VideoTitle">{Vdata.snippet.title}</p>
                <div className="ChannelInfo">
                    <div class="ChannelInfoNameOuter">
                    <span>{Vdata.snippet.channelTitle}</span>
                    
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
                         {Vdata.snippet.publishedAt}
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
    let context = useContext(Videosearchcontext);

    let {data,setUpdate} = context;
    let Carddata = context.data;
    // const a = useContext(Videosearchcontext)
    console.log("A====================",Carddata[0].snippet.thumbnails.high.url);

    
    return  (
        data.map(VideoCard)  
    );
}



export default Video;