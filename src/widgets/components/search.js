import React from 'react';
import './search.css';

/* otra forma de renderizar UI */
const Search = ()=>(
    <form className="search">
			<input 
				type="text" 
				className="search-input"
				placeholder= "Busca tu canción favorita"
			/>
		</form>
)
export default Search;