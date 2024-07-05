import React from 'react';
import '../styles/Square.css';

const Square = ({ index, piece, onClick, className }) => {

    // Gestionnaire de clic sur la case
    const handleClick = () => {
        console.log("Case clicked : " + index);
        onClick(index);
    };

    return (
        <div className={"square"}>
            <button className={`${className}`} onClick={handleClick}>
                {piece}
            </button>
        </div>
    );
};

export default Square;
