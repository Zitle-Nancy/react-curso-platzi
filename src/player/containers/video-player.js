import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';

export default class VideoPlayer extends Component{
    render(){
        return(
            <VideoPlayerLayout>
							<video
								controls
								autoPlay
								src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
							/>
            </VideoPlayerLayout>
        )
    }
}