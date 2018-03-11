import React from 'react';
import Media from './media.js';
import './playlist.css';

function Playlist(props){
	// const categories = props.data.categories;
	// console.log(categories);
	return(
		<div className = 'playlist'>
			{
				props.playlist.map((item) => {
					return (
						<Media
							handleClick = {props.handleOpenModal}
							{...item}
							key = {item.id}
						/>
					)
				})
			}
		</div>
	);
}

export default Playlist;
