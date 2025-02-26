import { useEffect, useState } from 'react';

function App() {
  
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = () => {
    fetch('http://localhost:3000/api/posts')
      .then((res) => res.json())
      .then((data) => setCharacters(data.results))
      .catch((err) => console.error(err));
  };

  useEffect(fetchCharacters, []);

  return (
    <>
      <div className="container">
        <div className="row row-cols-4">
          {characters.map((elem) => {
            return (
              <div className="" key={elem.id}>
                <div className="card">
                  <figure>
                    <img src={elem.image} alt={elem.title} />
                  </figure>
                  <h3>{elem.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;