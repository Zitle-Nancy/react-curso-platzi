import React from 'react';
import Media from './media.js';
import './playlist.css';
import Play from '../../icons/components/play.js';
import FullScreen from '../../icons/components/fullScreen.js'; 
import Pause from '../../icons/components/pause.js';
import Volumen from '../../icons/components/volumen.js';

function Playlist(props){
	const categories = props.data.categories;
	// console.log(categories);
	return(
		<div className = 'playlist'>
			<Play 
				size={50} 
				color="red"
			/>
			<FullScreen
				size={50}
				color="#000"
			/>
			<Pause
				size={50}
				color="gray"
			/>
			<Volumen 
				size={50}
				color="pink"
			/>
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