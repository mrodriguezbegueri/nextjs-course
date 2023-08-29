"use client";

import { FC } from "react";
import { FavoriteCardPokemon } from "./";

interface Props {
  favoritesPokemons: number[];
}

const Favorites: FC<Props> = ({ favoritesPokemons }) => {
  return (
    <div className="grid gap-2 justify-start md:grid-cols-6 lg:grid-cols-6">
      {favoritesPokemons.map((pokemonId) => (
        <FavoriteCardPokemon key={pokemonId} pokemonId={pokemonId} />
      ))}
    </div>
  );
};

export default Favorites
