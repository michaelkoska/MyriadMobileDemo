import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";

class Searchbar extends Component {
	state = {term: ''};

	onInputChange = event => {
		this.setState({term: event.target.value});
	}

	onFormSubmit = event => {
		event.preventDefault();
		const pokemon = event.target.value;
		this.props.searchPokemon(pokemon)
		this.props.history.push("/pokemon/pikachu")
	}

	render(){
		return(
		<div>
			<form onSubmit={this.onFormSubmit} >
				<label>Pokemon Search</label>
				<input
					type="text"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
			</form>
		</div>
		)
	}
}

export default withRouter(Searchbar);