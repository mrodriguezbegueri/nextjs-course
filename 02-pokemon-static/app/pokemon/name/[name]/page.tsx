import { FC } from "react";
import { Pokemon, PokemonListResponse } from "@/interfaces";
import { OnePokemonPage } from "@/components/pokemon";
import { getPokemonInfo } from "@/utils/getPokemonInfo";
import { Metadata, ResolvingMetadata } from "next";

interface Props {
  params: {
    name: string;
  };
}

export async function generateMetadata({params}: Props, parent: ResolvingMetadata): Promise<Metadata> {

  return {
    openGraph: {
      title: `Este es el titulo para el pokemon ${params.name}`,
      description: `Esta es la descripción para el pokemon ${params.name}`,
      images: [
        {
          url: `/img/banner.png`
        }
      ]
    }
  }
}

const getPokemon = async (name: string): Promise<Pokemon> => {
  const pokemon = await getPokemonInfo(name)

  return pokemon
}

const PokemonByNamePage: FC<Props> = async ({ params }) => {
  const pokemon = await getPokemon(params.name);

  return <OnePokemonPage pokemon={pokemon} />;
};

export async function generateStaticParams() {
  const getPokemonsResponse = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151", {
    cache: "force-cache",
  });

  const pokemons = (await getPokemonsResponse.json()) as PokemonListResponse;

  return pokemons.results.map(({ name }) => ({
    name,
  }));
}

export default PokemonByNamePage