import React from 'react';
import './search.css';

/* otra forma de renderizar UI */
const Search = (props)=>(
		<form 
			className="search"
			onSubmit = {props.handleSumbit}
		>
			<input
				ref={props.setRef} 
				type="text" 
				className="search-input"
				placeholder= "Busca tu canción favorita"
				value="Luis"
			/>
		</form>
)
export default Search;