import React, { useState, useEffect } from 'react';

import PokemonCard from './PokemonCard';
import Loading from '../Utils/Loading';
import Error from '../Utils/Error';

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const limit = 10;

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=' + limit)     
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        return Promise.all(data.results.map(pokemon => 
          fetch(pokemon.url).then(res => res.json())
        ));
      })
      .then((fullPokemonData) => {
        setPokemonList(fullPokemonData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}