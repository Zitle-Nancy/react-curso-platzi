import React from 'react';
import Category from './category';
import './categories.css';

export default function Categories(props) {
	return (
			<div className="categories">
				{
					props.categories.map((item)=>{
						return (
								<Category
									{...item}
									key={item.id}
									handleOpenModal={props.handleOpenModal}
								/>
							)
					})
				}
			</div>
		)
}
