import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  withRouter
} from "react-router-dom";

class Searchbar extends Component {
	state = {term: ''};

	onInputChange = event => {
		this.setState({term: event.target.value});
	}

	onFormSubmit = event => {
		/*const pokemon = event.target.getAttribute('search-tag')*/
		event.preventDefault();
		console.log(this.state.term)
		this.props.searchPokemon(this.state.term)

		this.props.history.push(`/pokemon/${this.state.term}`)
	}

	render(){
		const searchbar = "searchbar";
		const formControl = "form__control"
		return(
		<div className={formControl}>
			<form className={searchbar} onSubmit={this.onFormSubmit} >
				<label>Pokemon Search</label>
				<input className={searchbar}
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