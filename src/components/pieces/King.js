// Bishop.js
import { emptyNextMoves, findNextMovesPositions, getFractionalPart, isWhitePiece } from '../../utilities/Utilities';

export const moveKing = (pieces, index, setPieces, setValeur, setGreenSquares, isWhite) => {
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

    let nextMoveUpLeft = index - 9;
    let nextMoveUpRight = index - 7;
    let nextMoveDownRight = index + 9;
    let nextMoveDownLeft = index + 7;

    // TOWER movement one square
    // UP direction
    if (pieces[nextMoveUp] === '') {
        movesPossible.push(nextMoveUp);
        nextMoveUp -= 8;
    }
    else {
        if (!newGreenSquares.includes(nextMoveUp) && isWhitePiece(pieces, nextMoveUp) !== isWhite) {
            newGreenSquares.push(nextMoveUp);
        }
    }
    // DOWN direction
    if (pieces[nextMoveDown] === '') {
        movesPossible.push(nextMoveDown);
        nextMoveDown += 8;
    }
    else {
        if (!newGreenSquares.includes(nextMoveDown) && isWhitePiece(pieces, nextMoveDown) !== isWhite) {
            newGreenSquares.push(nextMoveDown);
        }
    }
    // RIGHT direction
    if (getFractionalPart(nextMoveRight, 8) !== "0") {
        if (pieces[nextMoveRight] === '') {
            movesPossible.push(nextMoveRight);
            nextMoveRight += 1;
        }
        else {
            if (!newGreenSquares.includes(nextMoveRight) && isWhitePiece(pieces, nextMoveRight) !== isWhite) {
                newGreenSquares.push(nextMoveRight);
            }
        }
    }
    // LEFT direction
    if (getFractionalPart(nextMoveLeft, 8) !== "875") {
        if (pieces[nextMoveLeft] === '') {
            movesPossible.push(nextMoveLeft);
            nextMoveLeft -= 1;
        }
        else {
            if (!newGreenSquares.includes(nextMoveLeft) && isWhitePiece(pieces, nextMoveLeft) !== isWhite) {
                newGreenSquares.push(nextMoveLeft);
            }
        }
    }

    // BISHOP movement one square
    //UPLEFT direction
    if (getFractionalPart(nextMoveUpLeft, 8) !== '875') {
        if (pieces[nextMoveUpLeft] === '') {
            movesPossible.push(nextMoveUpLeft);
            nextMoveUpLeft -= 9;
        }
        else {
            if (!newGreenSquares.includes(nextMoveUpLeft) && isWhitePiece(pieces, nextMoveUpLeft) !== isWhite) {
                newGreenSquares.push(nextMoveUpLeft);
            }
        }
    }
    //DOWNLEFT direction
    if (getFractionalPart(nextMoveDownLeft, 8) !== '875') {
        if (pieces[nextMoveDownLeft] === '') {
            movesPossible.push(nextMoveDownLeft);
            nextMoveDownLeft += 7;
        }
        else {
            if (!newGreenSquares.includes(nextMoveDownLeft) && isWhitePiece(pieces, nextMoveDownLeft) !== isWhite) {
                newGreenSquares.push(nextMoveDownLeft);
            }
        }
    }
    //UPRIGHT direction
    if (getFractionalPart(nextMoveUpRight, 8) !== '0') {
        if (pieces[nextMoveUpRight] === '') {
            movesPossible.push(nextMoveUpRight);
            nextMoveUpRight -= 7;
        }
        else {
            if (!newGreenSquares.includes(nextMoveUpRight) && isWhitePiece(pieces, nextMoveUpRight) !== isWhite) {
                newGreenSquares.push(nextMoveUpRight);
            }
        }
    }
    //DOWNRIGHT direction
    if (getFractionalPart(nextMoveDownRight, 8) !== '0') {
        if (pieces[nextMoveDownRight] === '') {
            movesPossible.push(nextMoveDownRight);
            nextMoveDownRight += 9;
        }
        else {
            if (!newGreenSquares.includes(nextMoveDownRight) && isWhitePiece(pieces, nextMoveDownRight) !== isWhite) {
                newGreenSquares.push(nextMoveDownRight);
            }
        }
    }

    const newPieces = [...pieces];

    for (let i = 0; i < movesPossible.length; i++) {
        newPieces[movesPossible[i]] = '\u25CB';
    }
    setPieces(newPieces);
    setValeur(index);
    setGreenSquares(newGreenSquares);
};

