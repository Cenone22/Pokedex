const About = () => {
    return (
      <div
        style={{
          padding: '2rem',
          maxWidth: '900px',
          margin: '0 auto',
          lineHeight: '1.6',
          fontFamily: 'Arial, sans-serif',
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
        }}
      >
        {/* Centered Section */}
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
            marginBottom: '1rem'
          }}>
            About This Pokédex
          </h1>
  
          <p style={{ marginBottom: '1rem' }}>
            Welcome to the Pokédex — your ultimate guide to the wonderful and mysterious world of Pokémon!
            This project was developed as part of a web development assignment, designed to demonstrate the use of modern React practices,
            including routing, API integration, pagination, and responsive design.
          </p>
  
          <p style={{ marginBottom: '1rem' }}>
            Pokémon are fantastical creatures of various shapes, sizes, and abilities that inhabit the Pokémon universe. 
            Since the original games launched in 1996, Pokémon have captured the hearts of millions worldwide — 
            and now number over 1,000 different species!
          </p>
  
          <p style={{ marginBottom: '2rem' }}>
            The purpose of this Pokédex is to allow trainers (users!) to browse Pokémon, discover their stats, 
            abilities, and unique characteristics by fetching real-time data from the <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer" style={{ color: '#0077cc' }}>PokéAPI</a>.
          </p>
        </div>
  
        {/* Left-aligned Technologies Used Section */}
        <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
          <h2 style={{
            fontSize: 'clamp(1.2rem, 4vw, 2rem)',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Technologies Used
          </h2>
          <ul style={{ listStylePosition: 'inside', padding: 0 }}>
            <li>React + Vite for a fast and modern frontend setup</li>
            <li>React Router for seamless page navigation</li>
            <li>PokéAPI to access live Pokémon data</li>
            <li>GitHub Pages for easy deployment and sharing</li>
          </ul>
        </div>
  
        {/* Centered Professor Oak quote */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
            "The world of dreams and adventures with Pokémon awaits!" — Professor Oak
          </p>
        </div>
      </div>
    )
  }
  
  export default About
  