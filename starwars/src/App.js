import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import CharacterList from './components/CharacterList';


const H1 = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`
const Div = styled.div`
  text-align: center;
`

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
    <Div className="App">
      <H1 className="Header">React Wars</H1>
      <CharacterList starWarsChars={starWarsChars} />
    </Div>
  );
}

export default App;
