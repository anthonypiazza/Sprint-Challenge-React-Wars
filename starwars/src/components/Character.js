import React from 'react';

const Character = props => {
    if (!props.char) return <div>Loading...</div>
    return (
        <div className="character">
            <h1>{props.char.name}</h1>
            <p>Gender: {props.char.gender}</p>
            <p>Mass: {props.char.mass}</p>
            <p>Eye Color: {props.char.eye_color}</p>
        </div>
    )
}

export default Character;