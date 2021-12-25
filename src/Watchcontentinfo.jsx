import React from 'react';
import './css/Watchcontentinfo.css';
import Watchchanneldetails from './Watchchanneldetails.jsx';
import { useParams } from 'react-router-dom';



let Watchcontentinfo = ()=>{
    let {vtitle,vpublishtime} = useParams();
    return (
        <React.Fragment>
            <h3 className="WatchcontentTitle">{vtitle}</h3>
            <div className="WatchcontentInfoOuter">
                <div className="WatchcontentInfoInnerLeft">
                <span>{vpublishtime}</span>
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