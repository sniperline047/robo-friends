import React from 'react';

const Searchbox = ( {searchbar, searchChange}) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 bg-lightest-blue ba b--green'
				type='text' 
				placeholder='Search robo-friends'
				onChange={searchChange}
				/>
			<hr></hr>		
		</div>
	);
};

export default Searchbox;