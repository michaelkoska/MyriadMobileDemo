import React from 'react';

const PokecardInfo = (props) => {
	console.log(props)
	if(!props.selectedPokemon){
		return<div>Loading...</div>
	}
	/*var [pokemon] = props.selectedPokemon;*/


	return(
		<div>
			<h2>{props.selectedPokemon}</h2>
			<img src={props.selectedImage} alt={props.selectedPokemon}/>
			<h3>I choose you!</h3>
		</div>
	);
};

export default PokecardInfo;