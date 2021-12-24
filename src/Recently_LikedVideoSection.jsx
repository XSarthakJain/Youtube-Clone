import React from 'react';
import Logo from './media/Logo.PNG';
import './css/Recently_LikedVideoSection.css';


let Recently_LikedVideoSection = ()=>{
    return (
        <React.Fragment>
            <div className='Recently_LikedVideoSectionOuter'>
                <a href="#">PLAY ALL</a>
                <img src='https://i0.wp.com/wikipura.com/wp-content/uploads/2021/04/maxresdefault-3.jpg' alt="Recently Like Video"/>
                <h1>Liked Videos</h1>
                <p><span>338 videos . No views . Update today</span></p>
                <mark>
                    <span class="material-icons">
                    lock
                    </span> 
                    Private
                </mark>
                <p className='LikedVideoTrigger'>
                <span class="material-icons">
                    shuffle
                </span>
    
                <span class="material-icons">
                    more_horiz
                </span>
                </p>
                <div className='LikedSectionUserPortion'>
                    <img src='https://cocainemodels.es/wp-content/uploads/2018/12/40-years-jahre-become-a-model-werden-best-ager-tipps-hilfe-modeling-agency.jpg' alt='UserProfile' className='LikedSectionUserPortionPic'/>
                    <p>Sarthak Jain</p>
                </div>
            </div>
        </React.Fragment>
    );
}



export default Recently_LikedVideoSection;