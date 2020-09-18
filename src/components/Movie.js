import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function movie(props) {

  const {imdbID, Poster, Title} = props.movie;
  
  return (
    <Link to={`/${imdbID}`} style={{color: "black", textDecoration: "none"}}>
      <Card className="movieCard">
        <Card.Img variant="top" src={Poster} className="poster"/>
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  )
}
