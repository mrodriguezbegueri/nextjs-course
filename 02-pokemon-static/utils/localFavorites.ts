const toggleFavorite = (pokemonId: number): void => {
    console.log('toggleFavorite LLamado')

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

    if (favorites.includes(pokemonId)) {
        favorites = favorites.filter(id => id !== pokemonId)
    } else {
        favorites.push(pokemonId)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
}

const existsInFavorites = (pokemonId: number): boolean => {
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') ?? '[]')

    return favorites.includes(pokemonId)
}

const favoritesPokemons = (): number[] => JSON.parse(localStorage.getItem('favorites') ?? '[]')

export default {
    toggleFavorite,
    existsInFavorites,
    favoritesPokemons
}