import React, { Component } from 'react';

const styles = {
		container:{
			"fontSize":25,
			"backgroundColor":'red',
			'color':'white'
		}
	}
class Media extends Component {

	render() {
		return (
			<div style={styles.container}>
				<div>
					<img 
						src="" 
						alt="Deberia de salir una imagen"
						width={260}
						height={160}
					/>
					<h3>Por que..</h3>
					<p>Nancy</p>
				</div>
			</div>
		);
	}
}

export default Media;