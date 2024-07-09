// Bishop.js
import {emptyNextMoves, findNextMovesPositions, getFractionalPart} from '../../utilities/Utilities';

export const moveBishop = (pieces, index, setPieces, setValeur, setGreenSquares) => {
    let nextMovesPositions = findNextMovesPositions(pieces);

    if (nextMovesPositions !== null) {
        pieces = emptyNextMoves(pieces, nextMovesPositions, setGreenSquares);
    }

    const movesPossible = [];
    const newGreenSquares = [];

    let nextMoveUpLeft = index - 9;
    let nextMoveUpRight = index - 7;

    let nextMoveDownRight = index + 9;
    let nextMoveDownLeft = index + 7;

    for(let i=0; i<8; i++){
        if(getFractionalPart(nextMoveUpLeft, 8) !== '875'){
            if(pieces[nextMoveUpLeft] === ''){
                movesPossible.push(nextMoveUpLeft);
                nextMoveUpLeft -= 9; 
            }
            else{
                if(!newGreenSquares.includes(nextMoveUpLeft)){
                newGreenSquares.push(nextMoveUpLeft);
                }
            }
            if(pieces[nextMoveDownLeft] === ''){
                movesPossible.push(nextMoveDownLeft);
                nextMoveDownLeft += 7; 
            }
            else{
                if(!newGreenSquares.includes(nextMoveDownLeft)){
                newGreenSquares.push(nextMoveDownLeft);
                }
            }
        }
        if(getFractionalPart(nextMoveUpRight, 8) !== '0'){
            if(pieces[nextMoveUpRight] === ''){
                movesPossible.push(nextMoveUpRight);
                nextMoveUpRight -= 7; 
            }
            else{
                if(!newGreenSquares.includes(nextMoveUpRight)){
                newGreenSquares.push(nextMoveUpRight);
                }
            }
            if(pieces[nextMoveDownRight] === ''){
                movesPossible.push(nextMoveDownRight);
                nextMoveDownRight += 9; 
            }
            else{
                if(!newGreenSquares.includes(nextMoveDownRight)){
                newGreenSquares.push(nextMoveDownRight);
                }
            }
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

