"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";

import confetti from 'canvas-confetti';

import { Pokemon } from "@/interfaces";
import { localFavorites } from "@/utils";

interface Props {
  pokemon: Pokemon;
}

export const OnePokemonPage: FC<Props> = ({ pokemon }) => {
  
  const [isInFavorites, setIsInFavorites] = useState(false)
  
  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id)
    setIsInFavorites(!isInFavorites)

    if ( isInFavorites ) return

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0
      }
    })

  };

  useEffect(() => {
    setIsInFavorites(localFavorites.existsInFavorites(pokemon.id))
  }, [pokemon.id]) 

  
  return (
    <div className="grid gap-2 grid-cols-12 mt-5 justify-center">
      <Card isHoverable className="p-30 col-span-4 flex justify-center items-center">
        <CardBody>
          <Image
            alt={pokemon.name}
            src={pokemon.sprites.other?.dream_world.front_default ?? ""}
            width="100"
            height={200}
          />
        </CardBody>
      </Card>

      <Card className="col-span-8">
        <CardHeader className="flex justify-between items-center">
          <h1 className="capitalize">{pokemon.name}</h1>
          <Button
            className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded"
            color="primary"
            onClick={onToggleFavorite}
            
          >
            {isInFavorites ? 'En favoritos' : 'Guardar en favoritos'}
          </Button>
        </CardHeader>
        <CardBody>
          <h1 className="text-30px">Sprites:</h1>
          <div className="container gap-2 mx-auto flex flex-row justify-center">
            <Image alt={pokemon.name} src={pokemon.sprites.front_default} width="100" height={200} />
            <Image alt={pokemon.name} src={pokemon.sprites.back_default} width="100" height={200} />
            <Image alt={pokemon.name} src={pokemon.sprites.front_shiny} width="100" height={200} />
            <Image alt={pokemon.name} src={pokemon.sprites.back_shiny} width="100" height={200} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
