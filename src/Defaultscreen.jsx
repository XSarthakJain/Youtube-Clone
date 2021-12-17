import React from 'react';
import './App.css';
import Menuspace from './Menuspace.jsx';
import Recommendedtags from './Recommendedtags.jsx';
import Mediaspace from './Mediaspace.jsx';


let Defaultscreen = ()=>{
    return (
        <React.Fragment>
            <div className="OuterMainSpace">
            <section className="LeftSideSpace">
            <Menuspace></Menuspace>
            </section>
            <section className="RightSideSpace">
            <Recommendedtags></Recommendedtags>
            <Mediaspace></Mediaspace>
            </section>
            </div>
        </React.Fragment>
    )
}

export default Defaultscreen;