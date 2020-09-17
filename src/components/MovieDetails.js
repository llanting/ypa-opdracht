import React, {useState, useEffect} from 'react';

export default function MovieDetails(props) {

  const [movie, setMovie] = useState(null);
  const movieId = props.match.params.movieId;

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${movieId}&r=json`)
      .then((response) => response.json())
      .then(data => {
        setMovie(data)
      });
  }, [])

  if (!movie) {
    return <p>Loading...</p>
  }

  return (
    <div className="movie-details">
      <div className="info">
        <h1>{movie.Title}</h1>
        <p>{movie.Plot}</p>
        {/* <a href=`https://www.imdb.com/title/${movieId}/`>Go to IMDB-page</a> */}
      </div>
      <img src={movie.Poster} alt="poster"/>
    </div>
  )
}
