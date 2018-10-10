import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from "react-router-dom";
import PokecardList from "./Pokecard_List";
import PagelinksList from "./Pagelinks_List";
const axios = require("axios");

 
class Main extends Component {
  constructor(props){
  super(props);
    this.state = { 
      pokemon: [],
      selectedPage: 1,
      url: `https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=${this.selectedPage}`,
      pageInfo: null
    };

    getPokemon.call(this);

  }

  render() {
    return (
        <Router>
          <div>
            <div> {/*Content from route displayed*/}
              <h1>Pokedex</h1>
              {/*<Route path="/:pokemonPage" render={({ match }) => (
                <PokecardList pokemon={this.state.pokemon} />
              )} />*/}
              <PokecardList pokemon={this.state.pokemon} />*/
            </div>
            <div> {/*Links go here*/}
              <PagelinksList pageInfo={this.state.pageInfo} />
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
      url: `https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=${this.selectedPage}`,
      pageInfo: data.meta
      });
  })
  .catch((error) => {
    console.log(error);
  })
}
 
export default Main;