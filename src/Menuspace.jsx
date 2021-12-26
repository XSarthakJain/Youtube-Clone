import React,{useContext} from 'react';
import './css/Menuspace.css';
import Subscriberlist from './Subscription.jsx';
import {NavLink,Link} from 'react-router-dom';
import Videosearchcontext from './context/Videosearchcontext';

let SubscriptionListFun = (val)=>{
    
    
    return (
        <React.Fragment>
            <li>
                <span><img src={val.pic} className="SubscriptionListPic"/></span>
                <span className="SubscriptionListTitle">{val.subscribername}</span>
                <span>
                <small className="material-icons SubscriptionSensor">
                    sensors
                </small>
                </span>
            </li>
        </React.Fragment>
    );
}
let Menuspace = ()=>{
    return (
        <React.Fragment>
            <ul className="MenuOptionList">
                
                <NavLink exact to='/' >
                <li>
                    <span class="material-icons">
                    home
                    </span>
                    Home
                </li>
                </NavLink>
                <li>
                    <span class="material-icons">
                    explore
                    </span>
                    Explore
                </li>
                <li>
                    <span class="material-icons">
                    subscriptions
                    </span>
                    Subscriptions
                </li>

                <span className="CategoryDivider"></span>
                <li>
                    <span class="material-icons">
                    video_library
                    </span>
                    Library
                </li>
                <li>
                    <span class="material-icons">
                    history
                    </span>
                    History
                </li>
                <li>
                <span class="material-icons">
                    video_library
                    </span>
                    Your Videos
                </li>
                <li>
                    <span class="material-icons">
                    watch_later
                    </span>
                    Watch Later
                </li>
                <NavLink exact to={'/liked'} >
                <li>
                    <span class="material-icons">
                    thumb_up
                    </span>
                    Liked Videos
                </li>
                </NavLink>

                <li>
                    <span class="material-icons">
                    expand_more
                    </span>
                    Show More
                </li>
                <span className="CategoryDivider"></span>

                <p>subscriptions</p>               
                {Subscriberlist.map(SubscriptionListFun)}
            </ul>
        </React.Fragment>
    );
}



export default Menuspace;