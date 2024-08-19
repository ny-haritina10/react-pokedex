import React from 'react';
import PokemonCard from './components/Pokemon/Card';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <PokemonCard pokemonName="pikachu" />
    </div>
  );
}

export default App;