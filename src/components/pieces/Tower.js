// Tower.js
import {getFractionalPart, emptyNextMoves, findNextMovesPositions} from '../../utilities/Utilities';

export const moveTower = (pieces, index, setPieces, setValeur, setGreenSquares) => {
    let nextMovesPositions = findNextMovesPositions(pieces);

    if (nextMovesPositions !== null) {
        pieces = emptyNextMoves(pieces, nextMovesPositions, setGreenSquares);
    }

    const movesPossible = [];
    const newGreenSquares = [];

    let nextMoveUp = index - 8;
    let nextMoveDown = index + 8;
    let nextMoveRight = index + 1;
    let nextMoveLeft = index - 1;

    for(let i=0; i<8; i++){
        if(pieces[nextMoveUp] === ''){
            movesPossible.push(nextMoveUp);
            nextMoveUp -= 8; 
        }
        else{
            if(!newGreenSquares.includes(nextMoveUp)){
                console.log("Here 1 : " + nextMoveUp);
                newGreenSquares.push(nextMoveUp);
            }
        }
        if(pieces[nextMoveDown] === ''){
            movesPossible.push(nextMoveDown);
            nextMoveDown += 8; 
        }
        else{
            if(!newGreenSquares.includes(nextMoveDown)){
            console.log("Here 2 : " + nextMoveDown);
            newGreenSquares.push(nextMoveDown);
            }
        }
        if(getFractionalPart(nextMoveRight, 8) !== "0"){
            if(pieces[nextMoveRight] === ''){
                movesPossible.push(nextMoveRight);
                nextMoveRight += 1; 
            }
            else{
                if(!newGreenSquares.includes(nextMoveRight)){
                console.log("Here 3 : " + nextMoveRight);
                newGreenSquares.push(nextMoveRight);
                }
            }
        }
        if(getFractionalPart(nextMoveLeft, 8) !== "875"){
            if(pieces[nextMoveLeft] === ''){
                movesPossible.push(nextMoveLeft);
                nextMoveLeft -= 1; 
            }
            else{
                if(!newGreenSquares.includes(nextMoveLeft)){
                console.log("Here 4 : " + nextMoveLeft);
                newGreenSquares.push(nextMoveLeft);
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