import React from 'react';
import './video-player-layout.css';

const VideoPlayerLayout = () => (
    <div className="video-player">
        {props.children}
    </div>
);

export default VideoPlayerLayout;