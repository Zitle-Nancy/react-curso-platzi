import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component {
	// constructor(props){
	// 	super(props)
	// 	this.handleClick = this.handleClick.bind(this);
	// }
	/*aqui van las funciones*/
	handleClick = (event) => {
		console.log(this.props.image);
	}
	render() {
		return (
			// handleClick, solo es el nombre de la funcion, puede ir el que sea
			<div className="Media" onClick = {this.handleClick}>
				<div className="Media-image">
					<img 
						src = {this.props.image}
						alt="Deberia de salir una imagen"
						width={260}
						height={160}
					/>
					<h3 className="Media-title">{this.props.title}</h3>
					<p className="Media-author">{this.props.author}</p>
				</div>
			</div>
		);
	}
}
/* observar como se escribe propTypes y PropTypes */
Media.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	author: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['video','audio']),   
}
export default Media;