import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import PokecardList from "./Pokecard_List";
import PagelinksList from "./Pagelinks_List";
import PokecardInfo from "./Pokecard_Info";

const axios = require("axios");

 
class Main extends Component {
  constructor(props){
  	super(props);
	    this.state = { 
	      pokemon: [],
	      selectedPage: null,
	      url: `https://intern-pokedex.myriadapps.com/api/v1/pokemon`,
	      pageInfo: null,
        selectedPokemon: null
	    };

    
  }

  componentDidMount(){
    getPokemon.call(this)
  }

  render() {
    return (
        <Router>
          <div>
            <Route
              path="/:id/:pokemonId/"
              render={(props) => <PokecardInfo
              selectedPokemon={this.state.selectedPokemon}
              findPokemonById={() => {
                axios.get(`${this.state.url}?name=${props.match.params.pokemonId}`)
                  .then(({ data }) => {
                    this.setState({
                      selectedPokemon: data.data
                    })
                  })
                  .catch((error) => {
                    console.log(error);
                  })
              }}
              {...props}
              />}
            />
            <Route 
              path="/:id/" 
              render={(props) => <PokecardList
              selectedPage={this.state.selectedPage} 
              pokemon={this.state.pokemon} 
              updatePokemon={() => {
                axios.get(`${this.state.url}?page=${props.match.params.id}`)
                  .then(({ data }) => {
                    this.setState({
                      pokemon: data.data,
                      selectedPage: props.match.params.id
                    })
                  })
                  .catch((error) => {
                    console.log(error);
                  })
                }}
              {...props} 
              />} 
            />
            <div>
              <PagelinksList 
              	
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
  axios.get(`${this.state.url}`)
  .then(({ data }) => {
    this.setState({ 
      pokemon: data.data,
      selectedPage: data.meta.current_page,
      pageInfo: data.meta,
      url: `https://intern-pokedex.myriadapps.com/api/v1/pokemon`
    });
  })
  .catch((error) => {
    console.log(error);
  })
}

/*function getPokecardInfo(){
  axios.get()
    .then(({data}) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
}*/

/*onPageSelect={(selectedPage) => {
                  let url = `https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=${selectedPage}`;
                  axios.get(url)
                    .then(({data}) =>{
                      this.setState({
                        selectedPage: selectedPage,
                        url: url,
                        pokemon: data.data
                      });
                    })
                    .catch((error) => {
                      console.log(error)
                    });
                  }
                }
*/
 
export default Main;