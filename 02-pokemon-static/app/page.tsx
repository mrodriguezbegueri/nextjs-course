import { CardComp } from '@/components/pokemon'
import { PokemonListResponse, SmallPokemon } from '@/interfaces'
import { NextPage } from 'next'

const getPokemons = async (): Promise<SmallPokemon[]> => {
  const getPokemonResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151', {
    cache: 'force-cache'
  })

  const pokemonResults = await getPokemonResponse.json() as PokemonListResponse
  
  const pokemons: SmallPokemon[] = pokemonResults.results.map((pokemon, index) => (
    {
      ...pokemon,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
    }
  ))
  
  return pokemons
} 

const Page: NextPage = async () => {

  const pokemons = await getPokemons()
  
  return (
    <div className="gap-2 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
      {
        pokemons.map((pokemon, index) => (
          <>
          <CardComp key={index} pokemon={pokemon} />
          </>
        ))
      }
    </div>
  )
}


export default Page