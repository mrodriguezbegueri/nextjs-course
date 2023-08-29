
"use client"

import { SmallPokemon } from "@/interfaces";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import Image from "next/image";

interface Props {
  pokemon: SmallPokemon
}

export const CardComp: FC<Props> = ({pokemon}) => {
  const { id, name, img } = pokemon
  
const router = useRouter()

  const onClick = () => {
    router.push(`pokemon/name/${name}`)
  }
  
  return (
    <Card shadow="sm" isPressable isHoverable onClick={onClick}>
      <CardBody className="overflow-visible p-0">
        <Image src={img} alt={name} width="100" height={100} className="w-full h-[140px]" />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b className="capitalize">{name}</b>
        <p className="text-default-500">#{id}</p>
      </CardFooter>
    </Card>
  );
};
