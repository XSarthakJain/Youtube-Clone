import React from 'react';
import './css/Liked_Video_Card.css';
import video1 from './Videosdata.jsx';

let Card = (data,index)=>{
    return (
        <React.Fragment>
            <div className='LikeCardOuter'>
                <span>{index+1}</span>
                <img src={data.BannerImage} alt='LikedVideo'/>
                <div>
                    <h4>{data.VideoTitle}</h4>
                    <small>{data.ChannelName}</small>
                </div>
                {/* <span class="material-icons">
                    more_vert
                </span> */}
            </div>
        </React.Fragment>
    );
}
let Liked_Video_Card = ()=>{
    return (
        video1.map(Card)
    );
}



export default Liked_Video_Card;