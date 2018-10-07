import React from 'react';

const Pokecard = ({pokemon}) => {
	return(
			<div>
				<h3>{pokemon.name}</h3>
				<img src={pokemon.image} alt={pokemon.name} />
			</div>
	)
};

export default Pokecard;