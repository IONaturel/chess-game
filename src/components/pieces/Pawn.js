import { emptyNextMoves, findNextMovesPositions, findColumnOfPiece, isWhitePiece } from '../../utilities/Utilities';

export const movePawn = (pieces, index, setPieces, setValeur, setGreenSquares) => {
    let nextMovesPositions = findNextMovesPositions(pieces);

    if (nextMovesPositions !== null) {
        pieces = emptyNextMoves(pieces, nextMovesPositions, setGreenSquares);
    }

    const newPieces = [...pieces];
    const movePossible = index + 8;
    const attackMove = index + 7;
    const attackMove2 = index + 9;
    const newGreenSquares = [];

    const columnPiece = findColumnOfPiece(index);

    if (pieces[movePossible] === '') {
        newPieces[movePossible] = '\u25CB';
    }
    if (pieces[attackMove] !== '' && columnPiece !== 0 && isWhitePiece(pieces, attackMove)) {
        console.log("isWhitePiece(pieces, attackMove) : " + isWhitePiece(pieces, attackMove));
        newGreenSquares.push(attackMove);
    }
    if (pieces[attackMove2] !== '' && columnPiece !== 7 && isWhitePiece(pieces, attackMove2)) {
        console.log("isWhitePiece(pieces, attackMove2) : " + isWhitePiece(pieces, attackMove2));
        newGreenSquares.push(attackMove2);
    }

    setPieces(newPieces);
    setValeur(index);
    setGreenSquares(newGreenSquares);
};


export const movePawnBack = (pieces, index, setPieces, setValeur, setGreenSquares) => {
    let nextMovesPositions = findNextMovesPositions(pieces);

    if (nextMovesPositions !== null) {
        pieces = emptyNextMoves(pieces, nextMovesPositions, setGreenSquares);
    }
    
    const newPieces = [...pieces];
    const movePossible = index - 8;
    const attackMove = index - 7;
    const attackMove2 = index - 9;
    const newGreenSquares = [];

    const columnPiece = findColumnOfPiece(index);

    if(pieces[movePossible] === ''){
        newPieces[movePossible] = '\u25CB';
    }

    if (pieces[attackMove] !== '' && columnPiece !== 7 && !isWhitePiece(pieces, attackMove)) {
        newGreenSquares.push(attackMove);
    }
    if (pieces[attackMove2] !== '' && columnPiece !== 0 && !isWhitePiece(pieces, attackMove2)) {
        newGreenSquares.push(attackMove2);
    }

    setPieces(newPieces);
    setValeur(index);
    setGreenSquares(newGreenSquares);
};


