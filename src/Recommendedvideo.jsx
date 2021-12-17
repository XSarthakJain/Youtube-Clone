import React from 'react';
import video1 from './Videosdata.jsx';
import './css/Recommendedvideo.css';

let RecommendedvideoListItem = (data)=>{
    return (
        <React.Fragment>
            <div className='RecommendedvideoListItemOuter'>
                <img src={data.BannerImage} alt="Video Banner"/>
                <div className='RecommendedvideoListItemInner'>
                    <h4>{data.VideoTitle}</h4>
                    <small>{data.ChannelName}</small>
                    <span class="material-icons">
                        check_circle
                    </span>
                    <br/>
                    <small>{data.Views} {data.UploadTime}</small>
                </div>
            </div>
        </React.Fragment>
    )
}

let Recommendedvideo = ()=>{
    return (
        video1.map(RecommendedvideoListItem)
    );
}



export default Recommendedvideo;