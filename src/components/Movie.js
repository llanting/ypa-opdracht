import React from 'react'
import {Card} from 'react-bootstrap'

export default function movie(props) {
  
  return (
    <Card className="movieCard">
      <Card.Img variant="top" src={props.movie.Poster} className="poster"/>
      <Card.Body>
        <Card.Title>{props.movie.Title}</Card.Title>
      </Card.Body>
    </Card>
  )
}
