import React, {Component} from 'react';
import Card from './Card';

class CardList extends Component{
	render(){
		const cardsArray = this.props.robots.map( (user, i) => {
			return (
				<Card 
					key={i} 
					name={user.name} 
					id={user.id} 
					email={user.email}
				/>
			)
		})
		return(
			<div>
				{cardsArray}
			</div>
		);
	}
}

export default CardList;