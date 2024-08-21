import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PokemonCard({ pokemon }) {

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  return (
    <div 
      className="cursor-pointer bg-white shadow-md rounded-lg p-4 text-center hover:shadow-xl transition duration-300"
      onClick={handleCardClick}
    >
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