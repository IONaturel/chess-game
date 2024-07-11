// CapturedPieces.js
import React from 'react';
import '../styles/CapturedPieces.css';

const CapturedPieces = ({ pieces, value, title }) => {
    return (
        <div className="captured-pieces">
            <h3>{title}</h3>
            <div className="pieces">
                {pieces.map((piece, index) => (
                    <span key={index} className="captured-piece">[{piece}]</span>
                ))}
            </div>
            <div className="total-value">({value})</div>
        </div>
    );
};

export default CapturedPieces;
