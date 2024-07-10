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

  export const emptyNextMoves = (pieces, positions, setGreenSquares) => {
    const newPieces = [...pieces];
    if (positions === null) {
        return newPieces;
    }
    for (let cpt = 0; cpt < positions.length; cpt++) {
        const index = positions[cpt];
        newPieces[index] = "";
    }
    setGreenSquares([]);
    return newPieces;
};

export const moveToEmptySquare = (pieces, index, valeur, setPieces, setGreenSquares) => {
  let nextMovesPositions = findNextMovesPositions(pieces);
  const newPieces = emptyNextMoves(pieces, nextMovesPositions, setGreenSquares);
  newPieces[index] = newPieces[valeur];
  newPieces[valeur] = '';
  setPieces(newPieces);

  const newGreenSquares = [];
  setGreenSquares(newGreenSquares);
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

export const findColumnOfPiece = (index) => {
  let col = 0;
  if(getFractionalPart(index, 8) === "125"){
    col = 1;
  }
  else if(getFractionalPart(index, 8) === "25"){
    col = 2;
  }
  else if(getFractionalPart(index, 8) === "375"){
    col = 3;
  }
  else if(getFractionalPart(index, 8) === "5"){
    col = 4;
  }
  else if(getFractionalPart(index, 8) === "625"){
    col = 5;
  }
  else if(getFractionalPart(index, 8) === "75"){
    col = 6;
  }
  else if(getFractionalPart(index, 8) === "875"){
    col = 7;
  }
  return col;
}

export const isWhitePiece = (pieces, index) => {
  if(pieces[index] === "♜" || pieces[index] === "♞" || pieces[index] === "♝" || pieces[index] === "♛" || pieces[index] === "♚" || pieces[index] === "♟︎"){
    return false;
  }
  else{
    return true;
  }
}