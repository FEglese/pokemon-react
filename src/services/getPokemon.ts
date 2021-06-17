import pokemonModel from "../model/pokemon";

async function getPokemon(id: number): Promise<pokemonModel> {
	return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
		.then((data) => data.json())
		.then((data) => {
			return data;
		})
		.catch((e) => {
			return Promise.reject(e);
		});
}

export default getPokemon;
