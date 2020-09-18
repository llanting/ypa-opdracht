import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function movie(props) {
  return (
    <Link to={`/${props.movie.imdbID}`} style={{color: "black", textDecoration: "none"}}>
      <Card className="movieCard">
        <Card.Img variant="top" src={props.movie.Poster} className="poster"/>
        <Card.Body>
          <Card.Title>{props.movie.Title}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  )
}
