import React from 'react';

export default function PokemonCard({ pokemon }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mx-auto w-24 h-24"
      />
      <h2 className="text-2xl font-bold capitalize">{pokemon.name}</h2>
      <p className="text-gray-700">
        Type: {pokemon.types.map(type => type.type.name).join(', ')}
      </p>
      <div className="mt-4">
        <p className="text-sm text-gray-500">Height: {pokemon.height}</p>
        <p className="text-sm text-gray-500">Weight: {pokemon.weight}</p>
        <p className="text-sm text-gray-500">Base Experience: {pokemon.base_experience}</p>
      </div>
    </div>
  );
}