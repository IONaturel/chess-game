import { emptyNextMoves, findNextMovesPositions, getFractionalPart, isWhitePiece } from '../../utilities/Utilities';

export const moveKing = (pieces, index, setPieces, setValeur, setGreenSquares, isWhite, kingMoved, setKingMoved, rooksMoved, setRooksMoved) => {
    let nextMovesPositions = findNextMovesPositions(pieces);

    if (nextMovesPositions !== null) {
        pieces = emptyNextMoves(pieces, nextMovesPositions, setGreenSquares);
    }

    const movesPossible = [];
    const newGreenSquares = [];

    const directions = [
        -8, 8, 1, -1, // King moves (up, down, right, left)
        -9, -7, 9, 7  // King moves (up-left, up-right, down-right, down-left)
    ];

    for (let direction of directions) {
        const nextMove = index + direction;
        if (pieces[nextMove] === '') {
            movesPossible.push(nextMove);
        } else if (!newGreenSquares.includes(nextMove) && isWhitePiece(pieces, nextMove) !== isWhite) {
            newGreenSquares.push(nextMove);
        }
    }

    // Castling
    if ((isWhite && !kingMoved.white) || (!isWhite && !kingMoved.black)) {
        if (isWhite) {
            // White king castling
            if (pieces[63] === '♖' && !rooksMoved[63] && pieces[61] === '' && pieces[62] === '') {
                // Kingside castling for white
                movesPossible.push(62);
            }
            if (pieces[56] === '♖' && !rooksMoved[56] && pieces[57] === '' && pieces[58] === '' && pieces[59] === '') {
                // Queenside castling for white
                movesPossible.push(58);
            }
        } else {
            // Black king castling
            if (pieces[7] === '♜' && !rooksMoved[7] && pieces[5] === '' && pieces[6] === '') {
                // Kingside castling for black
                movesPossible.push(6);
            }
            if (pieces[0] === '♜' && !rooksMoved[0] && pieces[1] === '' && pieces[2] === '' && pieces[3] === '') {
                // Queenside castling for black
                movesPossible.push(2);
            }
        }
    }

    const newPieces = [...pieces];

    for (let move of movesPossible) {
        newPieces[move] = '\u25CB';
    }

    setPieces(newPieces);
    setValeur(index);
    setGreenSquares(newGreenSquares);
};
