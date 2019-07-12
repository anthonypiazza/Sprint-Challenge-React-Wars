import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import './components/StarWars.css';
import CharacterList from './components/CharacterList';

function App(){ 

  const [starWarsChars, setStarWarsChars] = useState();

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(res => {
        setStarWarsChars(res.data.results)
      })
      .catch(err => console.log(err, 'Noooooo something went wrong'));
  }, []);

  console.log(starWarsChars)

  if (!starWarsChars) return <div>Loading...</div>
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterList starWarsChars={starWarsChars} />
    </div>
  );
}

export default App;
