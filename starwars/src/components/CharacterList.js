import React from 'react';
import Character from './Character';

const CharacterList = props => {
    return (
        <div>
            {props.starWarsChars.map((char, index) => (
                <Character key={index} char={char} />
            ))}
        </div>
    )
}

export default CharacterList;