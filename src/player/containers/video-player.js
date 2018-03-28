import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';

export default class VideoPlayer extends Component{
		state = {
			pause:true
		}
		togglePlay = () =>{
			this.setState({
				pause:!this.state.pause
			})
		}
    render(){
        return(
            <VideoPlayerLayout>
							<Title
								title="Mi primer video en React :)"
							/>
							<PlayPause 
								pause={this.state.pause}
								handleClick = {this.togglePlay}
							/>
							<Video 
								autoplay={true}
								src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
							/>
            </VideoPlayerLayout>
        )
    }
}