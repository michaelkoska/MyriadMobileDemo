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
	      selectedPage: null,
	      url: `https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=1`,
	      pageInfo: null
	    };

    getPokemon.call(this)
  }

  render() {
    return (
        <Router>
          <div>
            <div>
              <PokecardList pokemon={this.state.pokemon} />
            </div>
            <div>
              <PagelinksList 
              	onPageSelect={(selectedPage) => {
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
      pageInfo: data.meta
    });
  })
  .catch((error) => {
    console.log(error);
  })
}

 
export default Main;