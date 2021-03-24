import React from 'react';
import ReactPlayer from 'react-player';
import Consolway from './consolway.mp4';
import './style.css';



function ConsolWayVideo() {
    return (
        <div maxWidth={false}>
            <ReactPlayer url={Consolway} className="myVideo" playing autoPlay muted loop />
            {/* <ReactPlayer url={USmap2} className="myVideo" playing autoPlay muted loop /> */}

        </div>
    )
}

export default ConsolWayVideo