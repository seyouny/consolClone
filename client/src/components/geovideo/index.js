import React from 'react';
import ReactPlayer from 'react-player';
import USmap from './usmap.mp4';
import USmap2 from './usmap2.mp4';
import './style.css';



function Geovideo() {
    return (
        <div maxWidth={false}>
            <ReactPlayer url={USmap} className="myVideo" playing autoPlay muted loop />
            {/* <ReactPlayer url={USmap2} className="myVideo" playing autoPlay muted loop /> */}

        </div>
    )
}

export default Geovideo
