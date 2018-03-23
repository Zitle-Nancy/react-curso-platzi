import React, { Component } from 'react';
import Search from '../components/search';

export default class SearchContainer extends Component{
	handleSumbit = event => {
		event.preventDefault();
		console.log('submit');
	}
	render(){
		return(
				<Search 
					handleSumbit={this.handleSumbit}
				/>
		)
	}
};