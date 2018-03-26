import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';

export default class VideoPlayer extends Component{
    render(){
        return(
            <VideoPlayerLayout>
							<Video 
								autoplay={true}
								src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
							/>
            </VideoPlayerLayout>
        )
    }
}