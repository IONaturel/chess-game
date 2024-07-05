// Tower.js
import {getFractionalPart, emptyNextMoves, findNextMovesPositions} from '../utilities/Utilities';

export const moveTower = (pieces, index, setPieces, setValeur) => {
    let nextMovesPositions = findNextMovesPositions(pieces);

    if (nextMovesPositions !== null) {
        pieces = emptyNextMoves(pieces, nextMovesPositions);
    }

    const movesPossible = [];
    let nextMoveUp = index - 8;
    let nextMoveDown = index + 8;
    let nextMoveRight = index + 1;
    let nextMoveLeft = index - 1;

    for(let i=0; i<8; i++){
        if(pieces[nextMoveUp] === ''){
            movesPossible.push(nextMoveUp);
            nextMoveUp -= 8; 
        }
        if(pieces[nextMoveDown] === ''){
            movesPossible.push(nextMoveDown);
            nextMoveDown += 8; 
        }
        if(pieces[nextMoveRight] === '' && getFractionalPart(nextMoveRight, 8) !== "0"){
            movesPossible.push(nextMoveRight);
            nextMoveRight += 1; 
        }
        if(pieces[nextMoveLeft] === '' && getFractionalPart(nextMoveLeft, 8) !== "875"){
            movesPossible.push(nextMoveLeft);
            nextMoveLeft -= 1; 
        }
    }

    const newPieces = [...pieces];

    for(let i = 0; i<movesPossible.length ; i++){
        newPieces[movesPossible[i]] = '\u25CB';
    }
    setPieces(newPieces);
    setValeur(index);
};