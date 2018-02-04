import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component {
	state = {
		author: 'No entiendo'
	}
	// constructor(props){
	// 	super(props)
	// 	this.state = {
	// 		author:props.author
	// 	}
	// 	// debemos bindear la funcion, dentro de nuestro metodo constructor
	// 	this.handleClick = this.handleClick.bind(this);
	// }
	// debemos crear al funcion 
	// handleClick(event) {
	// 	// console.log(this.props.image);
	// 	this.setState({
	// 		author:"Prueba"
	// 	})
	// }
	/*aqui van las funciones*/    
	// ejemplo hecho en ECMS6
	handleClick = (event) => {
		// console.log(this.props.image);
		this.setState({
			author:'Prueba con ECMS6'
		})
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
					<p className="Media-author">{this.state.author}</p>
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