import { emptyNextMoves, findNextMovesPositions, findColumnOfPiece, isWhitePiece } from '../../utilities/Utilities';

// BLACK PAWNS
export const movePawn = (pieces, index, setPieces, setValeur, setGreenSquares) => {
    let nextMovesPositions = findNextMovesPositions(pieces);

    if (nextMovesPositions !== null) {
        pieces = emptyNextMoves(pieces, nextMovesPositions, setGreenSquares);
    }

    const newPieces = [...pieces];
    const movePossible = index + 8;
    const movePossibleFirst = index + 16;
    const attackMove = index + 7;
    const attackMove2 = index + 9;
    const newGreenSquares = [];

    const columnPiece = findColumnOfPiece(index);

    for(let i = 8; i<16; i++){
        if(index === i && pieces[movePossible] === '' && pieces[movePossibleFirst] === ''){
            newPieces[movePossibleFirst] = '\u25CB';
        }
    }

    if (pieces[movePossible] === '') {
        newPieces[movePossible] = '\u25CB';
    }
    if (pieces[attackMove] !== '' && columnPiece !== 0 && isWhitePiece(pieces, attackMove)) {
        newGreenSquares.push(attackMove);
    }
    if (pieces[attackMove2] !== '' && columnPiece !== 7 && isWhitePiece(pieces, attackMove2)) {
        newGreenSquares.push(attackMove2);
    }

    setPieces(newPieces);
    setValeur(index);
    setGreenSquares(newGreenSquares);
};

// WHITE PAWNS
export const movePawnBack = (pieces, index, setPieces, setValeur, setGreenSquares) => {
    let nextMovesPositions = findNextMovesPositions(pieces);

    if (nextMovesPositions !== null) {
        pieces = emptyNextMoves(pieces, nextMovesPositions, setGreenSquares);
    }
    
    const newPieces = [...pieces];
    const movePossible = index - 8;
    const movePossibleFirst = index - 16;
    const attackMove = index - 7;
    const attackMove2 = index - 9;
    const newGreenSquares = [];

    const columnPiece = findColumnOfPiece(index);

    for(let i = 48; i<56; i++){
        if(index === i && pieces[movePossible] === '' && pieces[movePossibleFirst] === ''){
            newPieces[movePossibleFirst] = '\u25CB';
        }
    }

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


