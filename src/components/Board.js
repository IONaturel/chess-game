import React, { useState } from 'react';
import Square from './Square';
import '../styles/Board.css';
import { movePawn, movePawnBack } from './Pawn';
import { moveToEmptySquare, findNextMovesPositions, emptyNextMoves,} from '../utilities/Utilities';
import { moveTower } from './Tower'
import { moveHorse } from './Horse'
import { moveBishop } from './Bishop'
import { moveQueen } from './Queen'




const Board = () => {
    const initialBoard = [
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '♕', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
    ];
    const [pieces, setPieces] = useState(initialBoard);
    const [valeur, setValeur] = useState();

    const handleSquareClick = (index) => {
        if (pieces[index] !== '') {
            if (pieces[index] === '♟︎') {
                movePawn(pieces, index, setPieces, setValeur);
            } else if (pieces[index] === '♙') {
                movePawnBack(pieces, index, setPieces, setValeur);
            } 
            else if(pieces[index] === '♖'){
                moveTower(pieces, index, setPieces, setValeur);
            }
            else if(pieces[index] === '♘'){
                moveHorse(pieces, index, setPieces, setValeur);
            }
            else if(pieces[index] === '♗'){
                moveBishop(pieces, index, setPieces, setValeur);
            }
            else if(pieces[index] === '♕'){
                moveQueen(pieces, index, setPieces, setValeur);
            }
            else if (pieces[index] === "\u25CB") {
                moveToEmptySquare(pieces, index, valeur, setPieces);
            }
        }
        else{
            const nextMovesPositions = findNextMovesPositions(pieces);
            if(nextMovesPositions === null){
                return;
            }
            const getNewPieces = emptyNextMoves(pieces, nextMovesPositions);
            setPieces(getNewPieces);
        }
    };

    const renderSquare = (i) => (
        <Square key={i} index={i} piece={pieces[i]} onClick={handleSquareClick} />
    );

    const squares = Array(64).fill(null).map((_, i) => renderSquare(i));

    return <div className="board">{squares}</div>;
};

export default Board;
