import React from 'react';
import Media from './media.js';
import './playlist.css';

function Playlist(props){
	const categories = props.data.categories;
	// console.log(categories);
	return(
		<div className = 'playlist'>
		Esta es un componente puro
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

export default Playlist;