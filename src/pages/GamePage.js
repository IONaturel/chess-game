import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import Board from '../components/Board';
import '../styles/Global.css'

const GamePage = () => {
    const { gameState } = useContext(GameContext);

    return (
        <div className="game-page">
            <Board />
            {/* Afficher d'autres informations du jeu en utilisant gameState */}
        </div>
    );
};

export default GamePage;
