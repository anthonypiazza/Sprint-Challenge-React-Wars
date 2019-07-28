import React from 'react';
import styled from 'styled-components';

const CharacterDiv = styled.div`
    padding: 30px 0%;
    background-color: white;
    border-radius: 50%;
    border: 10px solid beige;
`

const CharacterName = styled.h1`
    text-decoration: underline;
    color: darkgreen;
`

const CharacterDetails = styled.p`
    background-color: darkgreen;
    border: 2px solid silver;
    margin: 5px 30%;
    border-radius: 10px;
    padding: 5px 0%;
    color: white;
`

const Character = props => {
    if (!props.char) return <div>Loading...</div>
    return (
        <CharacterDiv>
            <CharacterName>{props.char.name}</CharacterName>
            <CharacterDetails>Gender: {props.char.gender}</CharacterDetails>
            <CharacterDetails>Mass: {props.char.mass}</CharacterDetails>
            <CharacterDetails>Eye Color: {props.char.eye_color}</CharacterDetails>
        </CharacterDiv>
    )
}

export default Character;