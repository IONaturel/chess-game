// Queen.js
import {getFractionalPart, emptyNextMoves, findNextMovesPositions} from '../../utilities/Utilities';

export const moveQueen = (pieces, index, setPieces, setValeur, setGreenSquares) => {
    let nextMovesPositions = findNextMovesPositions(pieces);

    if (nextMovesPositions !== null) {
        pieces = emptyNextMoves(pieces, nextMovesPositions, setGreenSquares);
    }

    const movesPossible = [];
    let nextMoveUp = index - 8;
    let nextMoveDown = index + 8;
    let nextMoveRight = index + 1;
    let nextMoveLeft = index - 1;

    let nextMoveUpLeft = index - 9;
    let nextMoveUpRight = index - 7;
    let nextMoveDownRight = index + 9;
    let nextMoveDownLeft = index + 7;

    for(let i=0; i<8; i++){
        // Tower movement
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
            console.log("nextMoveLeft : " + nextMoveLeft);
            movesPossible.push(nextMoveLeft);
            nextMoveLeft -= 1; 
        }

        // Bishop movement
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