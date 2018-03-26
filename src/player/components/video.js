import React , { Component } from 'react';
import './video.css';
export default class Video extends Component {
    render(){
        return( 
					<div className="video">
						<video
							autoPlay = {this.props.autoplay}
							src={this.props.src}
						/>
					</div>   
        )
    }
}