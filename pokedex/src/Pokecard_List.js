import React from 'react';
import Pokecard from './Pokecard';

const PokeCardList = (props) => {

	let pokecard__container = "pokecard__container";
	const pokemonHandler = props.onclick;
	const pokemonList = props.pokemon.map((pokemon) => {
		return <Pokecard onClick={pokemonHandler} key={pokemon.id} pokemon={pokemon} />
	});

	return (
		<div className={pokecard__container}>
			{pokemonList}
		</div>
	);
};

export default PokeCardList;