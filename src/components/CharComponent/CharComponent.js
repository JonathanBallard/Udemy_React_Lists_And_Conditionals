import React from 'react';
import './CharComponent.css'

const CharComponent = props => {
    return (
        <div onClick={props.click} className="char">
            <h3>{props.char}</h3>
        </div>
    )
}

export default CharComponent;
