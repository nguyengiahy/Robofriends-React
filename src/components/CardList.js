import React from 'react';
import Card from './Card';

const CardList = ( {robots} ) => {
	return(
		<div>
			{
				robots.map( (user, i) => {
					return (
						<Card 
							key={i} 
							name={user.name} 
							id={user.id} 
							email={user.email}
						/>
					)
				})
			}
		</div>
	);
}

export default CardList;