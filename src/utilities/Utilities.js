// Utilities.js
export const getFractionalPart = (numerator, denominator) => {
    const decimalValue = numerator / denominator;
    const decimalString = decimalValue.toString();
    const decimalIndex = decimalString.indexOf('.');
  
    if (decimalIndex === -1) {
      return '0';
    }
  
    return decimalString.substring(decimalIndex + 1);
  }

  export const emptyNextMoves = (pieces, positions) => {
    if(positions === null){
        return;
    }
    const newPieces = [...pieces];
    for (let cpt = 0; cpt < positions.length; cpt++) {
        const index = positions[cpt];
        newPieces[index] = "";
    }
    return newPieces;
};

export const moveToEmptySquare = (pieces, index, valeur, setPieces) => {
  let nextMovesPositions = findNextMovesPositions(pieces);
  pieces = emptyNextMoves(pieces, nextMovesPositions);
  const newPieces = [...pieces];
  newPieces[index] = newPieces[valeur];
  newPieces[valeur] = '';
  setPieces(newPieces);
};

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