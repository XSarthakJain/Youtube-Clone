import React from 'react';
import './css/Mediaspace.css';
import Video from './Video.jsx';

let Mediaspace = ()=>{
    return (
        <React.Fragment>
            <section className="MediaspaceOuter">
                <Video></Video>
            </section>
        </React.Fragment>
    );
}

export default Mediaspace;