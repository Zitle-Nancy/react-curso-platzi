import React, { Component } from 'react';
import videoPlayerLayout from '../components/video-player-layout';

export default class VideoPlayer extends Component{
    render(){
        return(
            <videoPlayerLayout>
							<video
								controls
								autoPlay
								src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
							/>
            </videoPlayerLayout>
        )
    }
}