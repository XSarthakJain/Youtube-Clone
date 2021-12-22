import React from 'react';
import './css/Likedvideo.css';
import './App.css';
import Menuspace from './Menuspace.jsx';
import Liked_Video_Card from './Liked_Video_Card';
import Recently_LikedVideoSection from './Recently_LikedVideoSection.jsx';


let Likedvideo = ()=>{
    return (
        <React.Fragment>
            <div className="OuterMainSpace">
            <section className="LeftSideSpace">
            <Menuspace></Menuspace>
            </section>
            <section className="RightSideSpace">
                <div className='LikedOuter'>
                <div className='LeftLikedSection'>
                    <Recently_LikedVideoSection/>
                </div>
                <div className='RightLikedSection'>
                    <Liked_Video_Card/>
                </div>
                </div>
            </section>
            </div>
        </React.Fragment>
    );
}

export default Likedvideo;