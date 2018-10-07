import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import PokecardList from "./Pokecard_List";
import PagelinksList from './Pagelinks_List';
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


    axios.get(`${this.state.url}`)
      .then(({ data }) => {
        console.log(data.meta);
        this.setState({ 
          pokemon: data.data,
          selectedPage: data.meta.current_page,
          pageInfo: data.meta
          });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
        <Router>
          <div>
            <h1>Pokedex</h1>

            <PokecardList pokemon={this.state.pokemon} />
            <PagelinksList pageInfo={this.state.pageInfo} />
          </div>
        </Router>
    );
  }
}
 
export default Main;