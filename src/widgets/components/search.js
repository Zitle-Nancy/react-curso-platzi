import React from 'react';
import './search.css';

/* otra forma de renderizar UI */
const Search = (props)=>(
		<form 
			className="search"
			onSubmit = {props.handleSumbit}
		>
			<input 
				type="text" 
				className="search-input"
				placeholder= "Busca tu canción favorita"
			/>
		</form>
)
export default Search;