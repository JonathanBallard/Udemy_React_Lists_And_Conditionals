import React from 'react';
import './CharComponent.css'

const CharComponent = props => {
    return (
        <div className="char">
            <h3>{props.char}</h3>
        </div>
    )
}

export default CharComponent;
