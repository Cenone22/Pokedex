// Importing React hooks and router functions
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Interfaces for Pokémon data
interface Ability {
  ability: {
    name: string
  }
}

interface Type {
  type: {
    name: string
  }
}

interface PokemonDetailsData {
  name: string
  sprites: {
    front_default: string
  }
  height: number
  weight: number
  types: Type[]
  abilities: Ability[]
}

const PokemonDetails = () => {
  // Extract the Pokémon name from the URL parameters
  const { name } = useParams<{ name: string }>()

  // React router Hook to navigate back to the previous page
  const navigate = useNavigate()

  // State to store the detailed Pokémon data
  const [pokemon, setPokemon] = useState<PokemonDetailsData | null>(null)

  // Fetch detailed information about the selected Pokémon
  useEffect(() => {
    async function fetchDetails() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const data = await res.json()
      setPokemon(data)
    }

    fetchDetails()
  }, [name])

  // Display loading state while data is being fethced
  if (!pokemon) return <div>Loading...</div>

  return (
    <div style={{ padding: '1rem' }}>
      {/* Back button to return to the Pokédex page */}
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => navigate(-1)}>← Back to Pokedex</button>
      </div>

      {/* Pokémon name + image */}
      <h1>{pokemon.name.toUpperCase()}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />

      {/* Display basic Pokémon information */}
      <p><strong>Height:</strong> {pokemon.height}</p>
      <p><strong>Weight:</strong> {pokemon.weight}</p>

      {/* Display Pokémon types */}
      <p><strong>Types:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>

      {/* Display Pokémon abilities */}
      <p><strong>Abilities:</strong> {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
    </div>
  )
}

export default PokemonDetails
