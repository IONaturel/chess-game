// Horse.js
import {emptyNextMoves, findNextMovesPositions, findColumnOfPiece} from '../../utilities/Utilities';

export const moveHorse = (pieces, index, setPieces, setValeur, setGreenSquares) => {
    let nextMovesPositions = findNextMovesPositions(pieces);

    if (nextMovesPositions !== null) {
        pieces = emptyNextMoves(pieces, nextMovesPositions, setGreenSquares);
    }

    const movesPossible = [];
    const newGreenSquares = [];
    const columnPiece = findColumnOfPiece(index);

    if((columnPiece !== 0 && columnPiece !== 1)){
        if (pieces[index - 10] === '') {
            movesPossible.push(index - 10);
        }
        else{
            newGreenSquares.push(index - 10)
        }
        if (pieces[index + 6] === '') {
            movesPossible.push(index + 6);
        }
        else{
            newGreenSquares.push(index + 6)
        }
    }
    if(columnPiece !== 0){
        if (pieces[index - 17] === '') {
            movesPossible.push(index - 17);
        }
        else{
            newGreenSquares.push(index - 17)
        }
        if (pieces[index + 15] === '') {
            movesPossible.push(index + 15);
        }
        else{
            newGreenSquares.push(index + 15)
        }
    }
    if(columnPiece !== 7){
        if (pieces[index - 15] === '') {
            movesPossible.push(index - 15);
        }
        else{
            newGreenSquares.push(index - 15)
        }
        if (pieces[index + 17] === '') {
            movesPossible.push(index + 17);
        }
        else{
            newGreenSquares.push(index + 17)
        }
    }
    if(columnPiece !== 6 && columnPiece !== 7){
        if (pieces[index - 6] === '') {
            movesPossible.push(index - 6);
        }
        else{
            newGreenSquares.push(index - 6)
        }
        if (pieces[index + 10] === '') {
            movesPossible.push(index + 10);
        }
        else{
            newGreenSquares.push(index + 10)
        }
    }


    const newPieces = [...pieces];

    for(let i = 0; i<movesPossible.length ; i++){
        newPieces[movesPossible[i]] = '\u25CB';
    }
    setPieces(newPieces);
    setValeur(index);
    setGreenSquares(newGreenSquares);
};

