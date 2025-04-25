import { useState, useEffect } from 'react'

interface Pokemon {
  name: string
  image: string
}

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const [nextUrl, setNextUrl] = useState<string | null>(null)
  const [prevUrl, setPrevUrl] = useState<string | null>(null)
  const [currentUrl, setCurrentUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon?limit=20')

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch(currentUrl)
      const data = await res.json()

      // Fetch details for each Pokemon to get their image
      const promises = data.results.map(async (pokemon: { name: string; url: string }) => {
        const res = await fetch(pokemon.url)
        const details = await res.json()
        return {
          name: pokemon.name,
          image: details.sprites.front_default
        }
      })

      const results = await Promise.all(promises)

      setPokemonList(results)
      setNextUrl(data.next)
      setPrevUrl(data.previous)
    }
    fetchPokemon()
  }, [currentUrl])

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Pokédex</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {pokemonList.map((pokemon) => (
          <div key={pokemon.name} style={{ border: '1px solid black', padding: '1rem', width: '150px', textAlign: 'center' }}>
            <img src={pokemon.image} alt={pokemon.name} style={{ width: '80px', height: '80px' }} />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem' }}>
        {prevUrl && <button onClick={() => setCurrentUrl(prevUrl)}>Previous</button>}
        {nextUrl && <button onClick={() => setCurrentUrl(nextUrl)} style={{ marginLeft: '1rem' }}>Next</button>}
      </div>
    </div>
  )
}

export default Pokedex
