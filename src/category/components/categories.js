import React from 'react';
import Category from './category';
export default function Categories(props) {
	return (
			<div>
				{
					props.categories.map((item)=>{
						return (
								<Category {...item} key={item.id}/>
							)
					})
				}
			</div>
		)
}