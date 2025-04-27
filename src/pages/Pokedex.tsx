import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'  // For linking the pokemon cards


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

  const getRandomColor = () => {
    const colors = ['#f5b7b1', '#aed6f1', '#a9dfbf', '#f9e79f', '#d2b4de', '#f7c59f', '#92a8d1']
    return colors[Math.floor(Math.random() * colors.length)]
  }
  
  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ display: 'flex',flexWrap: 'wrap', justifyContent: 'center',}}>Pokédex</h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem',
        marginTop: '2rem',
        }}
>
        {pokemonList.map((pokemon) => (
            <Link to={`/pokemon/${pokemon.name}`} style={{ textDecoration: 'none', color: 'inherit' }} key={pokemon.name}>
            <div
                style={{
                backgroundColor: getRandomColor(),
                borderRadius: '12px',
                padding: '1rem',
                width: '180px',
                textAlign: 'center',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
                <img src={pokemon.image} alt={pokemon.name} style={{ width: '100px', height: '100px' }} />
                <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>
                {pokemon.name.toUpperCase()}
                </p>
            </div>
            </Link>
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
