import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Pages/Header';
import Footer from './components/Pages/Footer';
import Hero from './components/Pages/Hero';
import Pokedex from './components/Pokemon/Pokedex';
import PokemonView from './components/Pokemon/PokemonView';
import { useState } from 'react';

/*
  Header and Footer will always be displayed 
  no matter what Route is active
  each PATH is associated with an element 
*/
function App() {

  const [searchQuery, setSearchQuery] = useState('');  // manage the search query

  return (
    <div className="font-poppins">
      <Router>              
        <Header setSearchQuery={setSearchQuery}/>    
        <Routes>
          <Route path="/" element={<Hero />} />         
          <Route path="/pokedex" element={<Pokedex searchQuery={searchQuery}/>} />
          <Route path="/pokemon/:id" element={<PokemonView />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;