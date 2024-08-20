import React from 'react';
import PokemonList from './PokemonList';

function Pokedex({ searchQuery }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <PokemonList searchQuery={searchQuery}/>  
    </div>
  );
}

export default Pokedex;