import React from 'react';
import './App.css';
import Movieslist from './components/Movieslist.js';
import MovieDetails from './components/MovieDetails';
import 'bootstrap/dist/css/bootstrap.css';
import {Switch, Route} from 'react-router-dom';
require('dotenv').config();

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Movieslist}/>
        <Route path="/:movieId" render={(routeProps) => {
          return <MovieDetails {...routeProps}/>
        }} />
      </Switch>
    </div>
  );
}

export default App;
