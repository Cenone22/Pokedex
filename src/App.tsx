import { Routes, Route } from 'react-router-dom'
import Pokedex from './pages/Pokedex'
import About from './pages/About'
import Navbar from './components/Navbar'
import PokemonDetails from './pages/PokemonDetails'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
      </Routes>
    </>
  )
}

export default App
