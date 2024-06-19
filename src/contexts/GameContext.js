import React, { createContext, useState } from 'react';

const GameContext = createContext();

const initialGameState = {
    // État initial du jeu (par exemple, position des pièces)
};

const GameProvider = ({ children }) => {
    const [gameState, setGameState] = useState(initialGameState);

    return (
        <GameContext.Provider value={{ gameState, setGameState }}>
            {children}
        </GameContext.Provider>
    );
};

export { GameContext, GameProvider };
