import React, { useState } from 'react';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import { Route } from 'react-router-dom';


const App = () => {
  const [savedList, setSavedList] = useState([]);
  console.log(savedList)
  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route
        exact
        path="/"
        render={props => (
          <MovieList {...props} addToSavedList={addToSavedList} />
        )}
      />
      <Route
        path='/movies/:id'
        render={props => <Movie {...props} addToSavedList={addToSavedList} />}
      />
    </div>
  );
};

export default App;