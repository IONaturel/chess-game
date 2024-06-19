import React from 'react';
import '../styles/Square.css';

const Square = ({ index, piece, onClick }) => {

    // Gestionnaire de clic sur la case
    const handleClick = () => {
        onClick(index);
    };

    



    return (
        <div className={"square" }>
            <button onClick={handleClick}>{piece}</button>
        </div>
    );
};

export default Square;
