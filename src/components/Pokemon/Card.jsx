import React, { useState, useEffect } from 'react';

const PokemonCard = ({ pokemonName }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {     // fetch the data from pokeapi
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();   // use promise 
        setPokemon(data);
      } catch (error) {
        console.error('Error fetching the Pokémon:', error);
      }
    };

    fetchPokemon();
  }, [pokemonName]);

  if (!pokemon) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  console.log(pokemon);

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 capitalize">{pokemon.name}</h2>
        <p className="text-gray-600">ID: {pokemon.id}</p>
        <p className="text-gray-600">Height: {pokemon.height / 10} m</p>
        <p className="text-gray-600">Weight: {pokemon.weight / 10} kg</p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800">Types:</h3>
          <ul className="flex space-x-2 mt-2">
            {pokemon.types.map((type) => (
              <li
                key={type.type.name}
                className="px-2 py-1 bg-gray-200 rounded-lg text-gray-700 capitalize"
              >
                {type.type.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;