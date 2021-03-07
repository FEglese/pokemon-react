import React, {useState} from 'react';

import pokemonModel from '../../model/pokemon';
import getPokemon from '../../services/getPokemon';

type Props = {
  id: number,
}

function PokemonCard(props : Props) {
  const [pokemon, setPokemon] = useState(new pokemonModel([]));
  fetchPokemon(props.id).then(res => setPokemon(res));
 
  
  return (
    <div className="pokemon-card">
       <h3>{pokemon.name}</h3>
       <p>Height: {pokemon.height}</p>
       <p>Weight: {pokemon.weight}</p>
       <img src={pokemon.imageUrl} alt='Pokemon'></img>
    </div>
  );
}

async function fetchPokemon(id: number): Promise<pokemonModel>{
  const pokemon = await getPokemon(id);
  return pokemon;
}


export default PokemonCard;
