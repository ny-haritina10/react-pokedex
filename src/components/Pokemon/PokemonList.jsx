import React, { useState, useEffect } from 'react';

import PokemonCard from './PokemonCard';
import Loading from '../Utils/Loading';
import Error from '../Utils/Error';

export default function PokemonList({ searchQuery }) {      // value of the input filter passed as a Props
  const [pokemonList, setPokemonList] = useState([]);   // a state to store data from API 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);

  const limit = 10;       // numbers of pokemon retrieve for each API request

  const loadMorePokemon = () => {
    setOffset((prevOffset) => prevOffset + limit);        // increase the offset to load more Pokémon
  };

  const filteredPokemonList = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())      // filter pokemon list based on search query
  );

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)    // initial API request
                                                                                  // offset is the number of pokemon'set

      .then((response) => {                                           // with a list of Pokemon
        if (!response.ok) {       // status isn't 200                 // but only with the name and an URL 
          throw new Error('Network response was not ok');             // this URL point into the pokemon's details info 
        }                                                             
        return response.json();   
      })
      .then((data) => {     // status is 200                
        return Promise.all(data.results.map(pokemon =>         // data.results = { "name":"pickachu", "url":"http..." }
          fetch(pokemon.url).then(res => res.json())           // make a new fetch request to retrieve more data  
        ));                                                    // about this pokemon
      })                                                       // store the result into JSON format
                                                               // Promise.all() is promise that will be resolve   
                                                               // when all the Promise given in the argument 
                                                               // will be resolved
                                                               // it waits for all the detailed Pokémon data fetches to complete before proceeding. Once all fetches are successful, it returns an array of detailed Pokémon data.
      .then((fullPokemonData) => {
        setPokemonList((prevList) => [...prevList, ...fullPokemonData]);      // get all element from prevList 
        setLoading(false);                                                    // then add the new List using 
      })                                                                      // by using spread operator
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [ offset ]);

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {filteredPokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id + "-" +crypto.randomUUID()} pokemon={pokemon} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-yellow-500 transition duration-300"
          onClick={loadMorePokemon}
        >
          Load More Pokémon
        </button>
      </div>
      <br />
    </>
  );
}