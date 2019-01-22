import React from 'react';
import { NavLink } from "react-router-dom";

const Pokecard = ({pokemon, onClick}) => {
	let card="card";
	let heading="heading";
	let picture="picture";
	return(
			<div className={card}>
				<NavLink 
					pokemon-tag={pokemon.name}
					onClick={onClick}
					to={`/pokemon/${pokemon.name}`}
				>
				<h3 className={heading}>{pokemon.name}</h3>
				<img className={picture} src={pokemon.image} alt={pokemon.name} />
				</NavLink>
			</div>
	)
};

export default Pokecard;