import React from 'react';

function Icon(props){
	return(
			<svg 
				fill = {props.color}
				height = {props.height}
				width = {props.width}
				viewBox = "0 0 32 32" 
			>
				{this.props.children}
			</svg>
		)
} 

export default Icon;