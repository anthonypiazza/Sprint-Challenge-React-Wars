import React from 'react';
import Character from './Character';

const CharacterList = props => {
    return (
        <div>
            {props.starwarsChars.map(char => (
                <Character key={char.created} char={char} />
            ))}
        </div>
    )
}

export default CharacterList;