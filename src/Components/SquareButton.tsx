import React from 'react';

type squareProps={
    value: string,
    onClick: () => void
}
const SquareButton = ({onClick, value}:squareProps) => {

    return (
        
        <button type='button' onClick={onClick} style={{width:'100px', height:'100px'}}>
            {value}
        </button>
    );
};

export default SquareButton;