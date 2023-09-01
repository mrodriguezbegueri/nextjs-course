import { FC } from "react";
import { Metadata, ResolvingMetadata } from "next";
import { redirect } from 'next/navigation'

import { Pokemon } from "@/interfaces";
import { OnePokemonPage } from "@/components/pokemon";
import { getPokemonInfo } from "@/utils/getPokemonInfo";
import { RedirectType } from "next/dist/client/components/redirect";


export const dynamicParams = true

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({params}: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const pokemon = await getPokemon(params.id)

    return {
        title: pokemon.name
    }
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const pokemon = await getPokemonInfo(id)

  if (pokemon === null) {
    redirect('/', RedirectType.push)
  }

  return pokemon
};

const PokemonPage: FC<Props> = async ({ params }) => {
  const fullPokemon = await getPokemon(params.id);
  console.log('fullPokemon id', fullPokemon)

  return <OnePokemonPage pokemon={fullPokemon} />;
};

export async function generateStaticParams() {
  const pokemonsCount = [...Array(151)].map((value, index) => `${index + 1}`);
  console.log("pokemonsCount", pokemonsCount);

  return pokemonsCount.map((id) => ({
    id,
  }));
}

export default PokemonPage;
