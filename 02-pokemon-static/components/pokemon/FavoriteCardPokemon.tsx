"use client"

import { Card } from "@nextui-org/react";
import Image from "next/image";
import { FC } from "react";
import { useRouter } from 'next/navigation';

interface Props {
  pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
    const router = useRouter()

    const onClickFavorite = (): void => {
        router.push(`/pokemon/${pokemonId}`)
    }


  return (
    <div>
      <Card onClick={onClickFavorite} isHoverable isPressable style={{ padding: 10, width: "100%", height: "100%", marginTop: 10 }}>
        <Image
          alt="Favorito"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }} // optional
        />
      </Card>
    </div>
  );
};
