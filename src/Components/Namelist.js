import React from 'react';
import Card from './Card.js';

const Namelist = ( { names } ) => {
	return (
		<div>
			{
			names.map((user,index) => {
				return ( 
					<Card 
						key={index} 
						id={names[index].id} 
						name={names[index].name} 
						username={names[index].username}
					/>
				);
			})
		}
		</div>
	);
}

export default Namelist;