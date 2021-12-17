import React from 'react';
import './css/WatchchanneldetailsOuter.css';
import logo from './media/logo192.png';

let Watchchanneldetails = ()=>{
    return (
        <React.Fragment>
            <div className='WatchchanneldetailsOuter'>
                <div>
                <img src={logo} alt="Channel name"/>
                </div>

                <div className='WatchchanneldetailsInnerCenter'>
                    <h4>T-Series
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