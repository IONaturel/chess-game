import React from 'react';
import { GameProvider } from './contexts/GameContext';
import GamePage from './pages/GamePage';

const App = () => {
    return (
        <GameProvider>
            <div className="App">
                <GamePage />
            </div>
        </GameProvider>
    );
};

export default App;
