// npm 
import React, { useState } from 'react';

// Components
import PokemonCard from './components/pokemonCard';

// Style
import './style/App.scss';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemonId, setPokemonId] = useState(0);

  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
    if (isNumber(e.target.value)){
      setPokemonId(e.target.value);
    }
  }

  const isNumber = (inp: any) => {
    return !isNaN(parseFloat(inp)) && !isNaN(inp - 0)
  }

  return (
    <div className="App">
     <PokemonCard
      id={pokemonId}
     />

    <input
      type="text"
      className="search-input"
      placeholder="Pokemon ID"
      value={searchTerm}
      onChange={handleSearchChange}
    />

    </div>
  );
}

export default App;