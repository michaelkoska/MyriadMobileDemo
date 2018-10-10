# MyriadMobileDemo
A Pokedex Demo

I have broken this app down into a main component that passes state down into two separate components:

  ...PagelinksList: This passes it onto Pagelinks
  
  ...PokecardList: This passes it onto Pokecard
    
PagelinksList will render a list (1 through 37) of Pagelinks that will route to each link.

  ...As of now, the goal will be to have an event handler make a new "get" request every time a new link is clicked.
  
  ...Then the new pokemon list will update state and render the new PokecardList.

PokecardList will be similar to PagelinksList

  ...When a pokemon is clicked, it will route the specific Pokemon (this shouldn't require a new "get" request)
  
There are no styles yet, but I will create a grid system for the PokecardList using:

  ...~30% on a full screen and the rest for gutters creating separation
  
  ...~40-50% on a tablet screen
  
  ...~100% for mobile

After that, I will style as I see fit for links and displaying indivdual pokemon.
