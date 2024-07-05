// Bishop.js
import { emptyNextMoves, findNextMovesPositions, getFractionalPart } from '../../utilities/Utilities';

export const moveKing = (pieces, index, setPieces, setValeur) => {
    let nextMovesPositions = findNextMovesPositions(pieces);

    if (nextMovesPositions !== null) {
        pieces = emptyNextMoves(pieces, nextMovesPositions);
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

    // Tower movement one square
    if (pieces[nextMoveUp] === '') {
        movesPossible.push(nextMoveUp);
    }
    if (pieces[nextMoveDown] === '') {
        movesPossible.push(nextMoveDown);
    }
    if (pieces[nextMoveRight] === '' && getFractionalPart(nextMoveRight, 8) !== "0") {
        movesPossible.push(nextMoveRight);
    }
    if (pieces[nextMoveLeft] === '' && getFractionalPart(nextMoveLeft, 8) !== "875") {
        movesPossible.push(nextMoveLeft);
    }

    // Bishop movement one square
    if (pieces[nextMoveUpLeft] === '' && getFractionalPart(nextMoveUpLeft, 8) !== '875') {
        movesPossible.push(nextMoveUpLeft);
    }
    if (pieces[nextMoveUpRight] === '' && getFractionalPart(nextMoveUpRight, 8) !== '0') {
        movesPossible.push(nextMoveUpRight);
        nextMoveUpRight -= 7;
    }
    if (pieces[nextMoveDownRight] === '' && getFractionalPart(nextMoveDownRight, 8) !== '0') {
        movesPossible.push(nextMoveDownRight);
        nextMoveDownRight += 9;
    }
    if (pieces[nextMoveDownLeft] === '' && getFractionalPart(nextMoveDownLeft, 8) !== '875') {
        movesPossible.push(nextMoveDownLeft);
        nextMoveDownLeft += 7;
    }

    const newPieces = [...pieces];

    for (let i = 0; i < movesPossible.length; i++) {
        newPieces[movesPossible[i]] = '\u25CB';
    }
    setPieces(newPieces);
    setValeur(index);
};

