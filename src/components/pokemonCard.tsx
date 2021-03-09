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
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{
    fetchPokemon(props.id)
    },[props.id]
  );
 
  if (isLoading) {
    return (
      <div className="pokemon-card">
        <h2>Loading!</h2>
      </div>
    )
  }
  else if (error != null)
  {
    return (
      <div className="pokemon-card">
        <h2>No Pokemon Found!</h2>
      </div>
    )
  }
  else
  {
    return (
      <div className="pokemon-card">
        <h2>{capFirstLetter(pokemon.name)}</h2>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <img src={pokemon.imageUrl} alt='Pokemon'></img>
      </div>
    );
  }

  function capFirstLetter(input: string): string {
    return input.charAt(0).toUpperCase() + input.slice(1)
  }
  
  async function fetchPokemon(id: number): Promise<any>{
    try {
      setLoading(true);
      await getPokemon(id).then(res => setPokemon(res));
      setError(null);
    } catch(e) {
      console.log(e);
      setError(e);
    } finally{
      setLoading(false);
    }
  }
}

export default PokemonCard;