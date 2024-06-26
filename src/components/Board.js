import React, { useState } from 'react';
import Square from './Square';
import '../styles/Board.css';

const Board = () => {
    // Initialisation de l'état des pièces sur l'échiquier
    const initialBoard = [
        '♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜',
        '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙',
        '♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖',
    ];
    const [pieces, setPieces] = useState([
        '♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜',
        '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙',
        '♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖',
    ]);

    const [valeur, setValeur] = useState();

    const findNextMovesPositions = (pieces) => {
        const positions = [];
        for (let i = 0; i < pieces.length; i++) {
            if (pieces[i] === "\u25CB") {
                positions.push(i);
            }
        }
        if (positions.length !== 0) {
            return positions;
        }
        else {
            return null;
        }
    };

    const emptyNextMoves = (positions) => {
        const newPieces = [...pieces];
        for (let cpt = 0; cpt < positions.length; cpt++) {
            const index = positions[cpt];
            //console.log("positions[cpt] : " + index);
            newPieces[index] = ""; 
        }
        setPieces(newPieces);
    };


    // Gestionnaire de clic sur une case
    const handleSquareClick = (index) => {
        // console.log('Case cliquée :', index);
        // console.log("valeur : " + valeur)

        let nextMovesPositions = findNextMovesPositions(pieces);

        if (nextMovesPositions !== null) {
            emptyNextMoves(nextMovesPositions);
        }

        if (pieces[index] !== '') {
            if (pieces[index] === '♟︎') {
                let nextMovesPositions = findNextMovesPositions(pieces);
                const newPieces = [...pieces];

                if (nextMovesPositions !== null) {
                    for (let cpt = 0; cpt < nextMovesPositions.length; cpt++) {
                        const pos = nextMovesPositions[cpt];
                        newPieces[pos] = ""; // Empty the position
                    }
                }

                const movePossible = index + 8;
                newPieces[movePossible] = '\u25CB';
                setPieces(newPieces);
                setValeur(index);
            }
            else if (pieces[index] === '♙') {
                let nextMovesPositions = findNextMovesPositions(pieces);
                const newPieces = [...pieces];

                if (nextMovesPositions !== null) {
                    for (let cpt = 0; cpt < nextMovesPositions.length; cpt++) {
                        const pos = nextMovesPositions[cpt];
                        newPieces[pos] = ""; // Empty the position
                    }
                }

                const movePossible = index - 8;
                newPieces[movePossible] = '\u25CB';
                setPieces(newPieces);
                setValeur(index);
            }
            if (pieces[index] === "\u25CB"){
                emptyNextMoves(nextMovesPositions);
                const newPieces = [...pieces];
                newPieces[index] = newPieces[valeur];
                newPieces[valeur] = '';
                setPieces(newPieces);
            }
        }

    



    
    };

    // Générer les cases de l'échiquier
    const renderSquare = (i) => (
        <Square key={i} index={i} piece={pieces[i]} onClick={handleSquareClick} />
    );

    // Générer toutes les cases de l'échiquier
    const squares = Array(64).fill(null).map((_, i) => renderSquare(i));

    return <div className="board">{squares}</div>;
};

export default Board;
