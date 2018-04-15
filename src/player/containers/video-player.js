import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import PlayPause from '../components/play-pause';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';

export default class VideoPlayer extends Component{
		state = {
			pause:true,
			duration:0,
			currentTime:0,
			loading:false,
			mute:false,
			rangeValue:1,
			lastVolume:1 // es uno, porque es el valor antes de que el usuario lo manipule, es su max del input
		}
		togglePlay = () =>{
			this.setState({
				pause:!this.state.pause
			})
		}
		componentDidMount(){
			this.setState({
				pause:!this.props.autoplay
			})
		}
		handleLoadedMetadata = event =>{
			/* 
				para manipular el VIDEo, y saber quien lo dispara
				duration, es uno de sus metadatos
			*/
			this.video = event.target;
			this.setState({
				duration:this.video.duration
			})
		}
		handleTimeUpdate = event => {
			this.setState({
				currentTime:this.video.currentTime
			})
		}
		handleProgressChange = event =>{
			this.video.currentTime = event.target.value
		}
		handleSeeked = event => {
			this.setState({
				loading:false
			})
		}
		handleSeeking = event => {
			this.setState({
				loading:true
			})
		}
		
		handleVolumeChange = event => {
			const volume = this.video.volume = event.target.value;
			this.setState({
				lastVolume: volume,
				rangeValue: volume
			},()=>{
				if(this.state.rangeValue > 0){
					this.setState({
						mute:false
					})
				}else{
					this.setState({
						mute:true,
						lastVolume: 0.3
					})
					
				}
			})	
		}
		
		handleVolumeMute = event => {
			this.setState({
				mute:!this.state.mute,
				// ponemos el rango del input hasta abajo 
				rangeValue: !this.state.mute ? 0 : this.state.lastVolume
			},()=>{
				if(this.state.mute){
					// ponemos el volumen del video en cero
					/*this.setState({
						rangeValue: 0
					})*/
					this.video.volume = 0
				}else{
					/*this.setState({
						rangeValue: this.state.lastVolume
					})*/
					// ponemos el volumen del video en el ultimo valor
					this.video.volume = this.state.lastVolume
				}
			})
		}
    render(){
        return(
            <VideoPlayerLayout>
							<Title
								title="Mi primer video en React :)"
							/>
							<Controls>
								<PlayPause 
									pause={this.state.pause}
									handleClick = {this.togglePlay}
								/>
								<Timer 
									duration={this.state.duration}
									currentTime={this.state.currentTime}
								/>
								<ProgressBar 
									duration={this.state.duration}
									value={this.state.currentTime}
									handleProgressChange = {this.handleProgressChange}
								/>
								<Volume 
									handleVolumeChange={this.handleVolumeChange}
									handleVolumeMute={this.handleVolumeMute}
									mute={this.state.mute}
									rangeValue={this.state.rangeValue}
								/>
							</Controls>
							<Spinner 
								active={this.state.loading}
							/>
							<Video 
								autoplay={this.props.autoplay}
								pause={this.state.pause}
								handleLoadedMetadata={this.handleLoadedMetadata}
								handleTimeUpdate={this.handleTimeUpdate}
								src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
								handleSeeked={this.handleSeeked}
								handleSeeking={this.handleSeeking}
							/>
            </VideoPlayerLayout>
        )
    }
}