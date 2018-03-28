import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';

export default class VideoPlayer extends Component{
    render(){
        return(
            <VideoPlayerLayout>
							<Title
								title="Mi primer video en React :)"
							/>
							<PlayPause />
							<Video 
								autoplay={false}
								src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
							/>
            </VideoPlayerLayout>
        )
    }
}