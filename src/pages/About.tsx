const About = () => {
    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        <h1>About This Pokédex</h1>
        
        <p>
          Welcome to the Pokédex — your ultimate guide to the wonderful and mysterious world of Pokémon!
          This project was developed as part of a web development assignment, designed to demonstrate the use of modern React practices,
          including routing, API integration, pagination, and responsive design.
        </p>
  
        <p>
          Pokémon are fantastical creatures of various shapes, sizes, and abilities that inhabit the Pokémon universe. 
          Since the original games launched in 1996, Pokémon have captured the hearts of millions worldwide — 
          and now number over 1,000 different species!
        </p>
  
        <p>
          The purpose of this Pokédex is to allow trainers (users!) to browse Pokémon, discover their stats, 
          abilities, and unique characteristics by fetching real-time data from the <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a>.
        </p>
  
        <p>
          This project uses:
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>React + Vite for a fast and modern frontend setup</li>
            <li>React Router for seamless page navigation</li>
            <li>PokéAPI to access live Pokémon data</li>
            <li>GitHub Pages for easy deployment and sharing</li>
          </ul>
        </p>
  
        <p>
          Whether you're a seasoned Pokémon Master or just getting started on your journey, we hope you enjoy exploring this Pokédex!
          Gotta catch 'em all!
        </p>
      </div>
    )
  }
  
  export default About
  