import { useEffect, useState } from 'react';

import axios from 'axios';

function App() {
  
  const [posts, setPosts] = useState([]);

  const apiUrl = import.meta.env.VITE_BASE_API_URL;

  function fetchPosts() {
    axios.get(apiUrl).then((res) => setPosts(res.data));
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