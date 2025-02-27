import axios from 'axios';

import { useEffect, useState } from 'react';

function App() {
  
  const [posts, setPosts] = useState([]);

  const apiUrl = 'http://localhost:3000/api/posts';

  function fetchPosts() {
    axios.get(apiUrl)
    .then((res) => setPosts(res.data))
    .catch(err => console.error(err) )
  }

  useEffect(fetchPosts, []);

  return (
    <>
      <div className="container">
        <div className="row row-cols-4">
          {posts.map((elem) => {
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