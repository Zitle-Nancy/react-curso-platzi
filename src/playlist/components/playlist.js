import React, { Component } from 'react';
import Media from './media.js';

export default class Playlist extends Component {
	render(){
		console.log(this.props.data)
		return(
			<div>
				<Media />
			</div>
		);
	}
}
