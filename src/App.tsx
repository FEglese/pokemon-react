import React from 'react';
import PokemonCard from './components/pokemon/pokemon';
import './style/App.scss';

function App() {
  return (
    <div className="App">
     <PokemonCard id={5} />
    </div>
  );
}


export default App;