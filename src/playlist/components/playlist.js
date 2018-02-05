import React, { Component } from 'react';
import Media from './media.js';
import './playlist.css';

export default class Playlist extends Component {
	render() {
		const categories = this.props.data.categories;
		console.log(categories);
		return(
				<div className = 'playlist'>
					{
						categories.map((elemento,indice) => {
							const playlists = elemento.playlist;
							return playlists.map((playlist, item) => {
								return <Media {...playlist} key = {item} />
							})
						})
					}
				</div>
			);
	}
}
