import { emptyNextMoves, findNextMovesPositions, findColumnOfPiece, isWhitePiece } from '../../utilities/Utilities';

// BLACK PAWNS
export const movePawn = (pieces, index, setPieces, setValeur, setGreenSquares, enPassantTarget, setEnPassantTarget) => {
    let nextMovesPositions = findNextMovesPositions(pieces);

    if (nextMovesPositions !== null) {
        pieces = emptyNextMoves(pieces, nextMovesPositions, setGreenSquares);
    }

    const newPieces = [...pieces];
    const movePossible = index + 8;
    const movePossibleFirst = index + 16;
    const attackMove1 = index + 7;
    const attackMove2 = index + 9;
    const newGreenSquares = [];

    const columnPiece = findColumnOfPiece(index);

    if (index >= 8 && index < 16 && pieces[movePossible] === '' && pieces[movePossibleFirst] === '') {
        newPieces[movePossibleFirst] = '\u25CB';
        setEnPassantTarget(movePossible); // Setting en passant target when pawn moves two squares
    } else {
        setEnPassantTarget(null);
    }

    if (pieces[movePossible] === '') {
        newPieces[movePossible] = '\u25CB';
    }

    if (pieces[attackMove1] !== '' && columnPiece !== 0 && isWhitePiece(pieces, attackMove1)) {
        newGreenSquares.push(attackMove1);
    }

    if (pieces[attackMove2] !== '' && columnPiece !== 7 && isWhitePiece(pieces, attackMove2)) {
        newGreenSquares.push(attackMove2);
    }

    // En passant capture
    if (enPassantTarget !== null) {
        if (columnPiece !== 0 && enPassantTarget === index + 7) {
            newGreenSquares.push(attackMove1);
        } else if (columnPiece !== 7 && enPassantTarget === index + 9) {
            newGreenSquares.push(attackMove2);
        }
    }

    setPieces(newPieces);
    setValeur(index);
    setGreenSquares(newGreenSquares);
};

// WHITE PAWNS
export const movePawnBack = (pieces, index, setPieces, setValeur, setGreenSquares, enPassantTarget, setEnPassantTarget) => {
    let nextMovesPositions = findNextMovesPositions(pieces);

    if (nextMovesPositions !== null) {
        pieces = emptyNextMoves(pieces, nextMovesPositions, setGreenSquares);
    }
    
    const newPieces = [...pieces];
    const movePossible = index - 8;
    const movePossibleFirst = index - 16;
    const attackMove1 = index - 7;
    const attackMove2 = index - 9;
    const newGreenSquares = [];

    const columnPiece = findColumnOfPiece(index);

    if (index >= 48 && index < 56 && pieces[movePossible] === '' && pieces[movePossibleFirst] === '') {
        newPieces[movePossibleFirst] = '\u25CB';
        setEnPassantTarget(movePossible); // Setting en passant target when pawn moves two squares
    } else {
        setEnPassantTarget(null);
    }

    if (pieces[movePossible] === '') {
        newPieces[movePossible] = '\u25CB';
    }

    if (pieces[attackMove1] !== '' && columnPiece !== 7 && !isWhitePiece(pieces, attackMove1)) {
        newGreenSquares.push(attackMove1);
    }

    if (pieces[attackMove2] !== '' && columnPiece !== 0 && !isWhitePiece(pieces, attackMove2)) {
        newGreenSquares.push(attackMove2);
    }

    // En passant capture
    if (enPassantTarget !== null) {
        if (columnPiece !== 7 && enPassantTarget === index - 7) {
            newGreenSquares.push(attackMove1);
        } else if (columnPiece !== 0 && enPassantTarget === index - 9) {
            newGreenSquares.push(attackMove2);
        }
    }

    setPieces(newPieces);
    setValeur(index);
    setGreenSquares(newGreenSquares);
};
