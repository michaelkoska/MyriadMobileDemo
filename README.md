# MyriadMobileDemo
A Pokedex Demo

I have broken this app down into a main component that passes state down into two separate components:

  ...PagelinksList: This passes it onto Pagelinks, Pagelinks should have a navlink to it
  
  ...PokecardList: This passes it onto Pokecard, Pokecard will have a navlink (Aiming for Oct 19)
    
PagelinksList will render a list (1 through 37) of Pagelinks that will route to each link.

  ...New API request every time it is clicked (functions could be refactored)
  
  ...Then the new pokemon list updates state and render the new PokecardList.

PokecardList will be similar to PagelinksList

  ...When a pokemon is clicked, it will route the specific Pokemon (this shouldn't require a new "get" request)
  ...I am thinking a componenent will render the Pokemon on top of the PokecardList

SearchBar component needs to be created
  ...Prevent default, maybe find a spot in the Main state and update it to display pokemon that is retrieved from API request
  
There are no styles yet, but I will create a grid system for the PokecardList using:

  ...Links need styles, I need to make sure everything is responsive

The navigation buttons (back and forward) do not work....routing overall needs work.
  ...I will have to look into React Router more.
  ...As of now, I will finish making the PokecardInfo portion (which will display selected Pokemon and info) and then work on the searchbar or routing next.


Image from Echo Grid at Unsplash
