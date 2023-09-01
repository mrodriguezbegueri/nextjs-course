import { Pokemon } from "@/interfaces";

export const getPokemonInfo = async (nameOrId: string): Promise<Pokemon | null> => {
  try {
    const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`, {
      next: {
        revalidate: 86400,
      }
    });

    const pokeData = (await pokemonResponse.json()) as Pokemon;

    const pokemon = {
      id: pokeData.id,
      name: pokeData.name,
      sprites: pokeData.sprites,
    };

    return pokemon;
  } catch (err) {
    return null
  }
};
