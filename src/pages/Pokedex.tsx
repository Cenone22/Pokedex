import { useState, useEffect } from 'react'

interface Pokemon {
  name: string
  url: string
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
      setPokemonList(data.results)
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
          <div key={pokemon.name} style={{ border: '1px solid black', padding: '1rem', width: '150px' }}>
            {pokemon.name}
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
