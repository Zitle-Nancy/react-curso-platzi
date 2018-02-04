import React, { Component } from 'react';
import Media from './media.js';
import './playlist.css';

export default class Playlist extends Component {
	render(){
		const playlist = this.props.data.categories[0].playlist;
		// console.log(playlist);
		return(
			<div className = 'playlist'>
				{
					playlist.map((elemento, indice) => {
						console.log(<Media title = {elemento.author} key = {indice}/>);
						return <Media {...elemento} key = {indice}/>

					})
				}
			</div>
		);
	}
}
