"use client";

import Favorites from "@/components/pokemon/Favorites";
import { NoFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";
import { useEffect, useState } from "react";

const FavoritesPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.favoritesPokemons());
  }, []);

  return (
    <>
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <Favorites favoritesPokemons={favoritesPokemons} />
      )}
    </>
  );
};

export default FavoritesPage;
