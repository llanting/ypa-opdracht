import React, {useState, useEffect} from 'react';
import Movie from './Movie';

export default function Movieslist() {
  
  let movies = require('../movies.json');
  
  const [superheroMovies, setMovies] = useState(movies);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s="superhero"&type=movie&r=json`)
      .then((response) => response.json())
      .then(data => {
        setMovies(data.Search)
      });
  }, [])

  return (
    <>
      {
        superheroMovies.map((movie, i) => {
          return <Movie key={'movie' + i} movie={movie}/>
        })
      }
    </>
  )
}
