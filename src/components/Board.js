import React from 'react';
import Square from './Square';
import '../styles/Board.css';

const Board = () => {
    return (
        <div className="board">
            {Array(64).fill(null).map((_, i) => (
                <Square key={i} index={i} />
            ))}
        </div>
    );
};

export default Board;