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
    const [kingMoved, setKingMoved] = useState({ white: false, black: false });
    const [rooksMoved, setRooksMoved] = useState({ 0: false, 7: false, 56: false, 63: false });
    const [enPassantTarget, setEnPassantTarget] = useState(null);

    const pieceValues = {
        '♙': 1, '♖': 5, '♘': 3, '♗': 3, '♕': 9,
        '♟︎': 1, '♜': 5, '♞': 3, '♝': 3, '♛': 9,
    };

    const handleMove = (index, moveFunction, isWhite) => {
        moveFunction(pieces, index, setPieces, setValeur, setGreenSquares, enPassantTarget, setEnPassantTarget, isWhite, kingMoved, setKingMoved, rooksMoved, setRooksMoved);
    };

    const handleSquareClick = (index) => {
        if (pieces[index] !== '') {
            if (pieces[index] === "\u25CB" || greenSquares.includes(index)) {
                const isCastlingMove = Math.abs(valeur - index) === 2;
                const isEnPassantMove = enPassantTarget !== null && index === enPassantTarget;
    
                if (isCastlingMove) {
                    if (index === 62) {
                        // Kingside castling for white
                        pieces[61] = pieces[63];
                        pieces[63] = '';
                    } else if (index === 58) {
                        // Queenside castling for white
                        pieces[59] = pieces[56];
                        pieces[56] = '';
                    } else if (index === 6) {
                        // Kingside castling for black
                        pieces[5] = pieces[7];
                        pieces[7] = '';
                    } else if (index === 2) {
                        // Queenside castling for black
                        pieces[3] = pieces[0];
                        pieces[0] = '';
                    }
                    setPieces(pieces);
                }
    
                if (isEnPassantMove) {
                    // Handle en passant capture
                    if (pieces[valeur] === '♙') {
                        pieces[index + 8] = ''; // Remove the captured black pawn
                    } else if (pieces[valeur] === '♟︎') {
                        pieces[index - 8] = ''; // Remove the captured white pawn
                    }
                }
    
                moveToEmptySquare(pieces, index, valeur, setPieces, setGreenSquares, whiteToMove ? setWhiteCaptured : setBlackCaptured, pieceValues);
                setWhiteToMove(!whiteToMove);
                if (pieces[valeur] === '♔') {
                    setKingMoved({ ...kingMoved, white: true });
                } else if (pieces[valeur] === '♚') {
                    setKingMoved({ ...kingMoved, black: true });
                }
                if (pieces[valeur] === '♖' || pieces[valeur] === '♜') {
                    setRooksMoved({ ...rooksMoved, [valeur]: true });
                }
                setEnPassantTarget(null); // Reset en passant target after the move
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
        <div className="board-container">
            <CapturedPieces pieces={blackCaptured.pieces} value={blackCaptured.value} title="Black Captured" />
            <div className="board">{squares}</div>
            <CapturedPieces pieces={whiteCaptured.pieces} value={whiteCaptured.value} title="White Captured" />
        </div>
    );
};

export default Board;
