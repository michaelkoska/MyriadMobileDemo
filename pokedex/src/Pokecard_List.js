import React from 'react';
import Pokecard from './Pokecard';

const PokeCardList = (props) => {
	props.updatePokemon();
	let pokecard__container = "pokecard__container";
	if(props.pokemon.length === 0){
		return<div>Loading...</div>
	}
	const pokemonList = props.pokemon.map((pokemon) => {
		return <Pokecard key={pokemon.id} pokemon={pokemon} />
	});
	return (
		<div className={pokecard__container}>
			{pokemonList}
		</div>
	);
};

export default PokeCardList;