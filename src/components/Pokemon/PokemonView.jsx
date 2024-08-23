import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Utils/Loading';
import Error from '../Utils/Error';

export default function PokemonView() {
  const { id } = useParams();     // retrieve the id param from the URL
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentId, setCurrentId] = useState(Number(id));     // type cast because id from param is string

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(`/pokedex`);
  };

  const handleNext = () => {
    setCurrentId(prevID => prevID + 1);
  };
  
  const handlePrevious = () => {
    setCurrentId(prevID => prevID - 1);
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${currentId}`)    // api call
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch Pokémon details');
        }
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [ currentId ]);       // make new api call each times id is updated or changed 

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return (
      <div className="p-4 flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-md p-6 text-center w-full max-w-md">
        <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} className="w-48 mx-auto" />
        <h1 className="text-3xl font-bold mt-4 capitalize">{pokemon.name}</h1>
        <p className="mt-2">Height: {pokemon.height}</p>
        <p className="mt-2">Weight: {pokemon.weight}</p>
        <p className="mt-2">Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>        
      </div>

      <div className="flex justify-between mt-8 w-full max-w-md">
        <button
          onClick={handlePrevious}
          className="bg-gray-500 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition duration-300"
          disabled={currentId === 1 ? true : false}
        >
          Previous
        </button>

        <button
          onClick={handleBack}
          className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-yellow-500 transition duration-300"
        >
          Back
        </button>

        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Next
        </button>
      </div>

      <div className="flex justify-center mt-8 w-full max-w-md">
       
      </div>
    </div>
  );
}