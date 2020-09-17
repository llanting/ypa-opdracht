import React, {useEffect, useState} from 'react';
import './App.css';
import Movie from "./components/Movie";
import 'bootstrap/dist/css/bootstrap.css';
require('dotenv').config();

function App() {

  let movies = require('./movies.json');
  
  const [superheroMovies, setMovies] = useState(movies);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s="superhero"&type=movie&r=json`)
      .then((response) => response.json())
      .then(data => {
        setMovies(data.Search)
      });
  }, [])

  return (
    <div className="App">
      {
        superheroMovies.map((movie, i) => {
          return <Movie key={'movie' + i} movie={movie}/>
        })
      }
    </div>
  );
}

export default App;
