import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'


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
  const { name } = useParams<{ name: string }>()
  const navigate = useNavigate()
  const [pokemon, setPokemon] = useState<PokemonDetailsData | null>(null)

  useEffect(() => {
    async function fetchDetails() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const data = await res.json()
      setPokemon(data)
    }

    fetchDetails()
  }, [name])

  if (!pokemon) return <div>Loading...</div>

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => navigate(-1)}>← Back to Pokedex</button>
      </div>
      <h1>{pokemon.name.toUpperCase()}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p><strong>Height:</strong> {pokemon.height}</p>
      <p><strong>Weight:</strong> {pokemon.weight}</p>
      <p><strong>Types:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>
      <p><strong>Abilities:</strong> {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
    </div>
  )
}

export default PokemonDetails
