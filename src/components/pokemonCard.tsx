// npm
import React, {useEffect, useState} from 'react';

// Models
import pokemonModel from '../model/pokemon';

// Services
import getPokemon from '../services/getPokemon';

type Props = {
  id: number,
}

function PokemonCard(props : Props) {
  const [pokemon, setPokemon] = useState(new pokemonModel([]));

  useEffect(()=>{
    fetchPokemon(props.id).then(res => setPokemon(res));
    },
    [props.id]
  )
 
  if (pokemon.name){
    return (
      <div className="pokemon-card">
        <h2>{capFirstLetter(pokemon.name)}</h2>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <img src={pokemon.imageUrl} alt='Pokemon'></img>
      </div>
    );
  } else {
    return (
      <div className="pokemon-card">
        <h2>Pokemon not found</h2>
      </div>
    );
  }
  
}

function capFirstLetter(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1)
}

async function fetchPokemon(id: number): Promise<pokemonModel>{
  const pokemon = await getPokemon(id);
  return pokemon;
}

export default PokemonCard;