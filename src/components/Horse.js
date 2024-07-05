// Tower.js
import {emptyNextMoves, findNextMovesPositions, findColumnOfPiece} from '../utilities/Utilities';

export const moveHorse = (pieces, index, setPieces, setValeur) => {
    let nextMovesPositions = findNextMovesPositions(pieces);

    if (nextMovesPositions !== null) {
        pieces = emptyNextMoves(pieces, nextMovesPositions);
    }

    const movesPossible = [];
    const columnPiece = findColumnOfPiece(index);

    if (pieces[index - 10] === '' && (columnPiece !== 0 && columnPiece !== 1)) {
        movesPossible.push(index - 10);
    }
    if (pieces[index - 17] === '' && columnPiece !== 0) {
        movesPossible.push(index - 17);
    }
    if (pieces[index - 15] === '' && columnPiece !== 7) {
        movesPossible.push(index - 15);
    }
    if (pieces[index - 6] === '' && (columnPiece !== 6 && columnPiece !== 7)) {
        movesPossible.push(index - 6);
    }
    if (pieces[index + 10] === '' && columnPiece !== 6 && columnPiece !== 7) {
        movesPossible.push(index + 10);
    }
    if (pieces[index + 17] === '' && columnPiece !== 7) {
        movesPossible.push(index + 17);
    }
    if (pieces[index + 15] === '' && columnPiece !== 0) {
        movesPossible.push(index + 15);
    }
    if (pieces[index + 6] === '' && (columnPiece !== 0 && columnPiece !== 1)) {
        movesPossible.push(index + 6);
    }

    const newPieces = [...pieces];

    for(let i = 0; i<movesPossible.length ; i++){
        newPieces[movesPossible[i]] = '\u25CB';
    }
    setPieces(newPieces);
    setValeur(index);
};

