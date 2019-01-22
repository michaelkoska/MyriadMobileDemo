import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import PokecardList from "./Pokecard_List";
import PagelinksList from "./Pagelinks_List";
import PokecardInfo from "./Pokecard_Info";
import Searchbar from "./Searchbar";
import axios from "axios";

const url = 'https://intern-pokedex.myriadapps.com/api/v1/pokemon';
//can be put into an axios.create file
 
class Main extends Component {
  constructor(props){
  	super(props);
	    this.state = { 
	      pokemon: [],
	      selectedPage: null,
	      pageInfo: null,
        selectedPokemon: null,
        selectedImage: null
	    };  
  }

  //update pokemone list and used in "/page/:id" route
  pageHandler = event => {
    const page = event.target.getAttribute('page-tag');
    this.pokemonListHandler(page)
  }

  pokemonListHandler = async page => {
    const response = await axios.get(url, {
      params: {
        page: page
      }
    })
    this.setState({
      pokemon: response.data.data,
      selectedPage: page
    })
  }
  //==========================================

  pokemonUpdateHandler = event => {
    //event.target.value comes back as undefined
    const pokemon = event.target.getAttribute('pokemon-tag');
    this.pokemonHandler(pokemon);
  }

  pokemonHandler = async pokemon => {
    /*console.log(pokemon)*/
    const response = await axios.get(url, {
      params: {
        name: pokemon
      }
    })
    /*console.log(response.data.data[0]);*/
    this.setState({
      selectedPokemon: response.data.data[0].name,
      selectedImage: response.data.data[0].image
    })
  }

  /*onTermSubmit = term => {
    
    this.pokemonHandler(term);
    
  }*/


//=====================LIFE CYCLE
  componentDidMount(){
    getPokemon.call(this)
  }

  shouldComponentUpdate(nextProps, nextState){
    return (this.state.selectedPage !== nextState.selectedPage) || (this.state.selectedPokemon !== nextState.selectedPokemon);
  }
//=======================


  render() {
    return (
        <Router>
          <div>
            <Searchbar 
              onFormSubmit={this.onTermSubmit}
              searchPokemon={this.pokemonHandler}
            />
            <Route
              path="/pokemon/:pokemonId/"
              render={(props) => <PokecardInfo
              selectedPage={this.state.selectedPage}
              updateSinglePokemon={this.pokemonHandler(props.match.params.pokemonId)}
              selectedPokemon={this.state.selectedPokemon}
              selectedImage={this.state.selectedImage}
              {...props}
              />}
            />
            <Route 
              path="/page/:id/" 
              render={(props) => <PokecardList 
              updatePokemon={this.pokemonListHandler(props.match.params.id)}
              pokemon={this.state.pokemon} 
              onClick={this.pokemonHandler}
              {...props} 
              />} 
            />
            <div>
              <PagelinksList 
              	onClick={this.pageHandler}
              	pageInfo={this.state.pageInfo}
              />
            </div>
          </div>
        </Router>
    );
  }
}

//put into another file
function getPokemon(){
  axios.get(url)
  .then(({ data }) => {
    this.setState({ 
      pokemon: data.data,
      selectedPage: data.meta.current_page,
      pageInfo: data.meta,
    });
  })
  .catch((error) => {
    console.log(error);
  })
}
 
export default Main;