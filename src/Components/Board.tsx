import React from 'react';
import SquareButton from './SquareButton';

interface boardProps  {
    value: string[],
    onClick: (index:number) => void
}

const Board = ({onClick,value}:boardProps) => {
    return (
        <div>
            <div>
                <SquareButton onClick={() =>onClick(0)} value={value[0]}/>
                <SquareButton onClick={() =>onClick(1)}value={value[1]}/>
                <SquareButton onClick={() =>onClick(2)} value={value[2]}/>
            </div>
            <div>
                <SquareButton onClick={() =>onClick(3)} value={value[3]}/>
                <SquareButton onClick={() =>onClick(4)} value={value[4]}/>
                <SquareButton onClick={() =>onClick(5)} value={value[5]}/>
            </div>
            <div>
                <SquareButton onClick={() =>onClick(6)} value={value[6]}/>
                <SquareButton onClick={() =>onClick(7)} value={value[7]}/>
                <SquareButton onClick={() =>onClick(8)} value={value[8]}/>
            </div>
        </div>
    );
};

export default Board;