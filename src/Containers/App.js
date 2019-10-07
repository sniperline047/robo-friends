import React,{ Component } from 'react';
import Namelist from '../Components/Namelist.js';
import Searchbox from '../Components/Searchbox.js';
import './App.css';
import Scroll from '../Components/Scroll.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			names: [],
			searchbar: '',
		}
	}
	conmponentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
  		.then(response => response.json())
  		.then(users => this.setState({names:users}));
	}
	onSearch = (event) => {
		this.setState({searchbar:event.target.value});
	}
	render() {
		const { names, searchbar } =  this.state;
		const filterNames = names.filter(n => {
			return n.name.toLowerCase().includes(searchbar.toLowerCase());
		})
		return !names.length ? <h1 className='sega'>LOADING</h1> :
			(
				<div className='tc'>
					<h1 className='sega f1'>Robo-Friends</h1>
		 			<Searchbox searchChange={this.onSearch} />
		 			<Scroll>
			 			<Namelist names={filterNames}/>
		 			</Scroll>
		 		</div>
			);
	}
};

export default App;