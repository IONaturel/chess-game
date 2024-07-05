// Pawn.js
import {emptyNextMoves, findNextMovesPositions} from '../utilities/Utilities';

export const movePawn = (pieces, index, setPieces, setValeur) => {
    let nextMovesPositions = findNextMovesPositions(pieces);

    if (nextMovesPositions !== null) {
        pieces = emptyNextMoves(pieces, nextMovesPositions);
    }

    const newPieces = [...pieces];
    const movePossible = index + 8;
    newPieces[movePossible] = '\u25CB';
    setPieces(newPieces);
    setValeur(index);
    
};

export const movePawnBack = (pieces, index, setPieces, setValeur) => {
    let nextMovesPositions = findNextMovesPositions(pieces);

    if (nextMovesPositions !== null) {
        pieces = emptyNextMoves(pieces, nextMovesPositions);
    }

    const newPieces = [...pieces];
    const movePossible = index - 8;
    newPieces[movePossible] = '\u25CB';
    setPieces(newPieces);
    setValeur(index);
};


