import React from 'react';
import Pokecard from './Pokecard';

const PokeCardList = (props) => {
	const pokemonList = props.pokemon.map((pokemon) => {
		return <Pokecard key={pokemon.id} pokemon={pokemon} />
	});
	return (
		<div>
			{pokemonList}
		</div>
	);
};

export default PokeCardList;