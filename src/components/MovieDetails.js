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
  }, [movieId])

  const showAlert = (text) => {
    alert(`${text}`)
  }

  if (!movie) {
    return <p>Loading...</p>
  }

  return (
    <div className="movie-details">
      <div className="info">
        <button onClick={() => showAlert(movie.Title)}><h1>{movie.Title}</h1></button>
        <button onClick={() => showAlert(movie.Plot)}><p>{movie.Plot}</p></button>
        <button onClick={() => showAlert(`https://www.imdb.com/title/${movieId}/`)}><a href={`https://www.imdb.com/title/${movieId}/`}>Go to IMDB-page</a></button>
      </div>
      <img src={movie.Poster} alt="poster"/>
    </div>
  )
}
