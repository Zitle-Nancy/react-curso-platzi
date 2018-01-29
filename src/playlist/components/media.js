import React, { Component } from 'react';
import './media.css'

/* const styles = {
		container:{
			"fontSize":25,
			"backgroundColor":'red',
			'color':'white'
		}
	}
*/
class Media extends Component {
	render() {
		return (
			<div className="Media">
				<div className="Media-image">
					<img 
						src=".././images/covers/bitcoin.jpg" 
						alt="Deberia de salir una imagen"
						width={260}
						height={160}
					/>
					<h3 className="Media-title">React!!</h3>
					<p className="Media-author">Nancy Zitle</p>
				</div>
			</div>
		);
	}
}

export default Media;