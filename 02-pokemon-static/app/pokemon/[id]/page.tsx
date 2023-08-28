import { OnePokemonPage } from "@/components/pokemon"
import { Pokemon } from "@/interfaces"
import { Metadata } from "next"
import { FC } from "react"

export const metadata: Metadata = {
    title: 'Pokemon 1'
}

interface Props {
    params: {
        id: string
    }
}

const getPokemon = async (id: string): Promise<Pokemon> => {
    const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        cache: 'force-cache'
    })

    const pokemon = await pokemonResponse.json() as Pokemon

    return pokemon
}



const PokemonPage: FC<Props> = async ({ params }) => {

const fullPokemon = await getPokemon(params.id)

  return (
        <OnePokemonPage pokemon={fullPokemon} />
  )
}
export async function generateStaticParams() {
    const pokemonsCount = [...Array(151)].map((value, index) => `${ index + 1 }`)
    console.log('pokemonsCount', pokemonsCount)

    return pokemonsCount.map(id => ({
        id
    }))
  }

export default PokemonPage