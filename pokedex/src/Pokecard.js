import React from 'react';

const Pokecard = ({pokemon}) => {
	console.log({pokemon})
	let card="card";
	let heading="heading";
	let picture="picture";
	return(
			<div className={card}>
				<h3 className={heading}>{pokemon.name}</h3>
				<img className={picture} src={pokemon.image} alt={pokemon.name} />
			</div>
	)
};

export default Pokecard;