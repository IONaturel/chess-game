// pawn.js
export const findNextMovesPositions = (pieces) => {
    const positions = [];
    for (let i = 0; i < pieces.length; i++) {
        if (pieces[i] === "\u25CB") {
            positions.push(i);
        }
    }
    if (positions.length !== 0) {
        return positions;
    } else {
        return null;
    }
};

export const emptyNextMoves = (pieces, positions, setPieces) => {
    const newPieces = [...pieces];
    for (let cpt = 0; cpt < positions.length; cpt++) {
        const index = positions[cpt];
        newPieces[index] = "";
    }
    setPieces(newPieces);
};

export const movePawn = (pieces, index, setPieces, setValeur) => {
    let nextMovesPositions = findNextMovesPositions(pieces);

    if (nextMovesPositions !== null) {
        pieces = emptyNextMoves(pieces, nextMovesPositions);
    }

    const newPieces = [...pieces];
    const movePossible = index + 8;
    newPieces[movePossible] = '\u25CB';
    setPieces(newPieces);
    setValeur(index);
};

export const movePawnBack = (pieces, index, setPieces, setValeur) => {
    let nextMovesPositions = findNextMovesPositions(pieces);

    if (nextMovesPositions !== null) {
        pieces = emptyNextMoves(pieces, nextMovesPositions);
    }

    const newPieces = [...pieces];
    const movePossible = index - 8;
    newPieces[movePossible] = '\u25CB';
    setPieces(newPieces);
    setValeur(index);
};

export const moveToEmptySquare = (pieces, index, valeur, setPieces) => {
    let nextMovesPositions = findNextMovesPositions(pieces);
    pieces = emptyNextMoves(pieces, nextMovesPositions);
    const newPieces = [...pieces];
    newPieces[index] = newPieces[valeur];
    newPieces[valeur] = '';
    setPieces(newPieces);
};
