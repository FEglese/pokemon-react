import pokemonModel from "../model/pokemon";

async function getPokemon(id: number): Promise<pokemonModel> {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
  const data = await response.json();
  
  if (response.ok){
    if (data) {
      return new pokemonModel(data);
    } else {
      return Promise.reject(new Error('No pokemon with id ' + id));
    }
  } else {
    return Promise.reject(new Error());
  }
}

export default getPokemon;