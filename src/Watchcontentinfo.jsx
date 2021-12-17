import React from 'react';
import './css/Watchcontentinfo.css';
import Watchchanneldetails from './Watchchanneldetails.jsx';

let Watchcontentinfo = ()=>{
    return (
        <React.Fragment>
            <h3 className="WatchcontentTitle">India vs China 🔥 | A must watch for all students | Honest Talk</h3>
            <div className="WatchcontentInfoOuter">
                <div className="WatchcontentInfoInnerLeft">
                <span>233,503 views13 Dec 2021</span>
                </div>

                <div className="WatchcontentInfoInnerRight">
                <span className="WatchcontentInfoInnerRightOption">
                    <span class="material-icons">
                    thumb_up_off_alt
                    </span>
                    <label>24K</label>
                </span>
                
                <span className="WatchcontentInfoInnerRightOption">
                    <span class="material-icons">
                    thumb_down_off_alt
                    </span>
                    <label>Dislike</label>
                </span>
                <span className="WatchcontentInfoInnerRightOption">
                    <span class="material-icons">
                    reply
                    </span>
                    <label>Share</label>
                </span>
                <span className="WatchcontentInfoInnerRightOption">
                    <span class="material-icons">
                    library_add
                    </span>
                    <label>Save</label>
                </span>
                <span className="WatchcontentInfoInnerRightOption">
                    <span class="material-icons">
                    more_horiz
                    </span>
                </span>
            </div>

            </div>
            <Watchchanneldetails/>
        </React.Fragment>
    );
}



export default Watchcontentinfo;