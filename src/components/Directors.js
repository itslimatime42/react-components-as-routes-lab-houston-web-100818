import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const displayDirector = (director) => {
    return (
      <div>
        <h2>Name: {director.name}</h2>
        <p>Movies: </p>
        <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => displayDirector(director))}
    </div>
  );
}

export default Directors
