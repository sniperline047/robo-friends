import React from 'react';

const Card =( { name, username, id } ) => {
	return (
	<div className="pa2 bg-light-green br3 dib mr2 mb2 grow bw2 shadow-5 tc">
		<img alt='poster' src={`https://robohash.org/${name}/?200x200/?set=set2`} />
		<div>
			<h2>{ name }</h2>
			<p>{ username }</p>
			<p>{ id }</p>
		</div>
	</div>
	);
}

export default Card;