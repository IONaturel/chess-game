import React from 'react';
import Board from '../components/Board';
import '../styles/Global.css'

const GamePage = () => {

    return (
        <div className="game-page">
            <Board />
            {/* Afficher d'autres informations du jeu en utilisant gameState */}
        </div>
    );
};

export default GamePage;
