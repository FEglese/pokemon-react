// npm
import { useEffect, useState } from "react";

// Models
import pokemon from "../model/pokemon";

// Services
import getPokemon from "../services/getPokemon";

type Props = {
	id: number;
};

const PokemonCard = (props: Props) => {
	const [myPokemon, setPokemon] = useState<pokemon>();
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchPokemon(props.id);
	}, [props.id]);

	if (isLoading) {
		return (
			<div className="pokemon-card">
				<h2>Loading!</h2>
			</div>
		);
	} else if (error != null) {
		return (
			<div className="pokemon-card">
				<h2>No Pokemon Found!</h2>
			</div>
		);
	} else {
		return (
			<div className="pokemon-card">
				<h2>{capFirstLetter(myPokemon?.name ?? "")}</h2>
				<p>Height: {myPokemon?.height}</p>
				<p>Weight: {myPokemon?.weight}</p>
				<img
					src={myPokemon?.sprites?.front_default}
					alt={myPokemon?.name + "'s Photo not found"}></img>
				<br />
			</div>
		);
	}

	function capFirstLetter(input: string): string {
		return input.charAt(0).toUpperCase() + input.slice(1);
	}

	async function fetchPokemon(id: number): Promise<void> {
		setLoading(true);
		setError(null);

		getPokemon(id)
			.then((res) => {
				setPokemon(res);
			})
			.catch((e) => {
				setError(e);
			})
			.finally(() => {
				setLoading(false);
			});
	}
};

export default PokemonCard;
