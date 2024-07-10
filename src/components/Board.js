import React, { useState } from 'react';
import Square from './Square';
import '../styles/Board.css';
import { movePawn, movePawnBack } from './pieces/Pawn';
import { moveToEmptySquare, findNextMovesPositions, emptyNextMoves,} from '../utilities/Utilities';
import { moveTower } from './pieces/Tower'
import { moveHorse } from './pieces/Horse'
import { moveBishop } from './pieces/Bishop'
import { moveQueen } from './pieces/Queen'
import { moveKing } from './pieces/King'

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

    const handleSquareClick = (index) => {
        if (pieces[index] !== '') {
            //Empty square
            if (pieces[index] === "\u25CB" || greenSquares.includes(index)) {
                moveToEmptySquare(pieces, index, valeur, setPieces, setGreenSquares);
            }
            //Pawns
            else if (pieces[index] === '♟︎') {
                movePawn(pieces, index, setPieces, setValeur, setGreenSquares);
            } 
            else if (pieces[index] === '♙') {
                movePawnBack(pieces, index, setPieces, setValeur, setGreenSquares);
            } 
            //White pieces
            else if(pieces[index] === '♖'){
                moveTower(pieces, index, setPieces, setValeur, setGreenSquares, true);
            }
            else if(pieces[index] === '♘'){
                moveHorse(pieces, index, setPieces, setValeur, setGreenSquares, true);
            }
            else if(pieces[index] === '♗'){
                moveBishop(pieces, index, setPieces, setValeur, setGreenSquares, true);
            }
            else if(pieces[index] === '♕'){
                moveQueen(pieces, index, setPieces, setValeur, setGreenSquares, true);
            }
            else if(pieces[index] === '♔'){
                moveKing(pieces, index, setPieces, setValeur, setGreenSquares, true);
            }
            //Black pieces
            else if(pieces[index] === '♜'){
                moveTower(pieces, index, setPieces, setValeur, setGreenSquares, false);
            }
            else if(pieces[index] === '♞'){
                moveHorse(pieces, index, setPieces, setValeur, setGreenSquares, false);
            }
            else if(pieces[index] === '♝'){
                moveBishop(pieces, index, setPieces, setValeur, setGreenSquares, false);
            }
            else if(pieces[index] === '♛'){
                moveQueen(pieces, index, setPieces, setValeur, setGreenSquares, false);
            }
            else if(pieces[index] === '♚'){
                moveKing(pieces, index, setPieces, setValeur, setGreenSquares, false);
            }
        }
        else{
            const newGreenSquares = [];
            setGreenSquares(newGreenSquares);

            const nextMovesPositions = findNextMovesPositions(pieces);
            if(nextMovesPositions === null){
                return;
            }
            const getNewPieces = emptyNextMoves(pieces, nextMovesPositions, setGreenSquares);
            setPieces(getNewPieces);
        }
    };

    const renderSquare = (i) => {
        const piece = pieces[i];
        const isGreenSquare = greenSquares.includes(i);
        // console.log("isGreenSquare : " + isGreenSquare);
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

    return <div className="board">{squares}</div>;
};

export default Board;
