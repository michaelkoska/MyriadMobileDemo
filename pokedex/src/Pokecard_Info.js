import React from 'react';

const PokecardInfo = (props) => {
	console.log(props)
	if(!props.selectedPokemon){
		return<div>Loading...</div>
	}
	/*var [pokemon] = props.selectedPokemon;*/
	const types = props.selectedTypes.map((type, i) => {
		return <li key={i}>{type}</li>
	})

	const card = "card__single";
	const cardTitle = "card__title";
	const cardPicture = "card__picture";
	const cardType = "card__type"
	return(
		<div className={card}>
			<h2 className={cardTitle}>#{props.selectedPokemonId} {props.selectedPokemon}</h2>
			<img className={cardPicture} src={props.selectedImage} alt={props.selectedPokemon}/>
			<div className={cardType}>
			TYPE:{types}
			</div>
		</div>
	);
};

export default PokecardInfo;