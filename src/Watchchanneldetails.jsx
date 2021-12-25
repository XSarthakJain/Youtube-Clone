import React from 'react';
import './css/WatchchanneldetailsOuter.css';
import logo from './media/logo192.png';
import { useParams } from 'react-router-dom';

let Watchchanneldetails = ()=>{
    let {ctitle,clink} = useParams();
    return (
        <React.Fragment>
            <div className='WatchchanneldetailsOuter'>
                <div>
                <a href={"https://www.youtube.com/channel/"+clink}>
                <img src={logo} alt="Channel name"/>
                </a>
                </div>

                <div className='WatchchanneldetailsInnerCenter'>
                    <h4>{ctitle}
                    <span class="material-icons">
                    check_circle
                    </span>
                    </h4>
                    <small>201M subscribers</small>
                </div>
                <div className='WatchchanneldetailsInnerRight'>
                    <button>subscribers</button>
                </div>
            </div>
        </React.Fragment>
    );
}



export default Watchchanneldetails;