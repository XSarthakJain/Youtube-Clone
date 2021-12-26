import React,{useContext} from 'react';
import './App.css';
import Menuspace from './Menuspace.jsx';
import Recommendedtags from './Recommendedtags.jsx';
import Mediaspace from './Mediaspace.jsx';
import Videosearchcontext from './context/Videosearchcontext';

let Defaultscreen = ()=>{
    const context = useContext(Videosearchcontext);
    let {menuState,menuStateValue} = context;

    
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
    if(menuStateValue > 0){
        alert("Default Screen Function");
        let LeftSideSpaceClass = document.getElementsByClassName("LeftSideSpace")[0];
        menuStateValue(menuStateValue);
        // LeftSideSpaceClass.style="color:red";
    }
}

export default Defaultscreen;