import React from 'react';

const ValidationComponent = props => {

    if(props.length < 5){
        return (
            
            <div className='validation'>
                <h4>Text too short...</h4>
            </div>
        )
    }
    else {
        return (
            <div className='validation'>
                <h4>Text okay!</h4>
            </div>
        )
    }

}


export default ValidationComponent;

