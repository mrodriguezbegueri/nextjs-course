import { Pokemon } from "@/interfaces";

export const getPokemonInfo = async (nameOrId: string): Promise<Pokemon> => {
  const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`, {
    cache: "force-cache",
  });

  const pokeData = (await pokemonResponse.json()) as Pokemon;

  const pokemon = {
    id: pokeData.id,
    name: pokeData.name,
    sprites: pokeData.sprites,
  };

  return pokemon;
};
