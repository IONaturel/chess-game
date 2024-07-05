// Tower.js
import {emptyNextMoves, findNextMovesPositions, getFractionalPart} from '../utilities/Utilities';

export const moveBishop = (pieces, index, setPieces, setValeur) => {
    let nextMovesPositions = findNextMovesPositions(pieces);

    if (nextMovesPositions !== null) {
        pieces = emptyNextMoves(pieces, nextMovesPositions);
    }

    const movesPossible = [];
    let nextMoveUpLeft = index - 9;
    let nextMoveUpRight = index - 7;

    let nextMoveDownRight = index + 9;
    let nextMoveDownLeft = index + 7;

    for(let i=0; i<pieces.length; i++){
        if(pieces[nextMoveUpLeft] === '' && getFractionalPart(nextMoveUpLeft, 8) !== '875'){
            movesPossible.push(nextMoveUpLeft);
            nextMoveUpLeft -= 9; 
        }
        if(pieces[nextMoveUpRight] === '' && getFractionalPart(nextMoveUpRight, 8) !== '0'){
            movesPossible.push(nextMoveUpRight);
            nextMoveUpRight -= 7; 
        }
        if(pieces[nextMoveDownRight] === '' && getFractionalPart(nextMoveDownRight, 8) !== '0'){
            movesPossible.push(nextMoveDownRight);
            nextMoveDownRight += 9; 
        }
        if(pieces[nextMoveDownLeft] === '' && getFractionalPart(nextMoveDownLeft, 8) !== '875'){
            movesPossible.push(nextMoveDownLeft);
            nextMoveDownLeft += 7; 
        }
        
    }


    const newPieces = [...pieces];

    for(let i = 0; i<movesPossible.length ; i++){
        newPieces[movesPossible[i]] = '\u25CB';
    }
    setPieces(newPieces);
    setValeur(index);
};

