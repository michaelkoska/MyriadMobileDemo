import React from 'react';

const PokecardInfo = (props) => {
	console.log(props.selectedPokemon);
	if(props.selectedPokemon){
		if(props.match.params.pokemonId !== props.selectedPokemon[0].name){
			props.findPokemonById();
		}
	}

	

	if(!props.selectedPokemon){
		return<div>Loading...</div>
	}
	var [pokemon] = props.selectedPokemon;


	return(
		<div>
			<h2>{pokemon.id}</h2>
			<h3>I choose you!</h3>
		</div>
	);
};

export default PokecardInfo;