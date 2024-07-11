import React, { useState } from 'react';
import Square from './Square';
import CapturedPieces from './CapturedPieces';
import '../styles/Board.css';
import { movePawn, movePawnBack } from './pieces/Pawn';
import { moveToEmptySquare, findNextMovesPositions, emptyNextMoves } from '../utilities/Utilities';
import { moveTower } from './pieces/Tower';
import { moveHorse } from './pieces/Horse';
import { moveBishop } from './pieces/Bishop';
import { moveQueen } from './pieces/Queen';
import { moveKing } from './pieces/King';

const Board = () => {
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

    const [pieces, setPieces] = useState(initialBoard);
    const [valeur, setValeur] = useState();
    const [greenSquares, setGreenSquares] = useState([]);
    const [whiteToMove, setWhiteToMove] = useState(true);
    const [whiteCaptured, setWhiteCaptured] = useState({ pieces: [], value: 0 });
    const [blackCaptured, setBlackCaptured] = useState({ pieces: [], value: 0 });

    const pieceValues = {
        '♙': 1, '♖': 5, '♘': 3, '♗': 3, '♕': 9,
        '♟︎': 1, '♜': 5, '♞': 3, '♝': 3, '♛': 9,
    };

    const handleMove = (index, moveFunction, isWhite) => {
        moveFunction(pieces, index, setPieces, setValeur, setGreenSquares, isWhite);
    };

    const handleSquareClick = (index) => {
        if (pieces[index] !== '') {
            if (pieces[index] === "\u25CB" || greenSquares.includes(index)) {
                moveToEmptySquare(pieces, index, valeur, setPieces, setGreenSquares, whiteToMove ? setWhiteCaptured : setBlackCaptured, pieceValues);
                setWhiteToMove(!whiteToMove);
            } else if (whiteToMove && '♙♖♘♗♕♔'.includes(pieces[index])) {
                handleMove(index, getMoveFunction(pieces[index]), true);
            } else if (!whiteToMove && '♟︎♜♞♝♛♚'.includes(pieces[index])) {
                handleMove(index, getMoveFunction(pieces[index]), false);
            }
        } else {
            const nextMovesPositions = findNextMovesPositions(pieces);
            if (nextMovesPositions !== null) {
                const newGreenSquares = [];
                setGreenSquares(newGreenSquares);
                const getNewPieces = emptyNextMoves(pieces, nextMovesPositions, setGreenSquares);
                setPieces(getNewPieces);
            }
        }
    };

    const getMoveFunction = (piece) => {
        switch (piece) {
            case '♙': return movePawnBack;
            case '♟︎': return movePawn;
            case '♖': case '♜': return moveTower;
            case '♘': case '♞': return moveHorse;
            case '♗': case '♝': return moveBishop;
            case '♕': case '♛': return moveQueen;
            case '♔': case '♚': return moveKing;
            default: return () => {};
        }
    };

    const renderSquare = (i) => {
        const piece = pieces[i];
        const isGreenSquare = greenSquares.includes(i);
        return (
            <Square
                key={i}
                index={i}
                piece={piece}
                className={`${isGreenSquare ? 'green-square' : ''}`}
                onClick={() => handleSquareClick(i)}
            />
        );
    };

    const squares = Array(64).fill(null).map((_, i) => renderSquare(i));

    return (
        <div className="game">
            <CapturedPieces pieces={blackCaptured.pieces} value={blackCaptured.value} title="Black Captured" />
            <div className="board">{squares}</div>
            <CapturedPieces pieces={whiteCaptured.pieces} value={whiteCaptured.value} title="White Captured" />
        </div>
    );
};

export default Board;
