import React, { useState } from 'react';
import Square from './Square';
import '../styles/Board.css';

const Board = () => {
    // Initialisation de l'état des pièces sur l'échiquier
    const initialBoard = [
        '♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜',
        '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙',
        '♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖',
    ];
    const [pieces, setPieces] = useState([
        '♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜',
        '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙',
        '♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖',
    ]);

    const [valeur, setValeur] = useState();


    // Gestionnaire de clic sur une case
    const handleSquareClick = (index) => {
        console.log('Case cliquée :', index);
        console.log("valeur : " + valeur)
        let cpt = 0;

        for (let i = 0; i < pieces.length; i++) {
            if (pieces[i] === "\u25CB") {
                cpt++;
            }
        }

        if (cpt > 0) {
            if (pieces[index] !== "\u25CB" || pieces[index] === "") {
                return;
            }
        }

        if (pieces[index] !== '') {
            if (pieces[index] === '♟︎') {
                const movePossible = index + 8;
                console.log("La case ou le pion peut se déplacer: " + valeur);
                const newPieces = [...pieces];
                newPieces[movePossible] = '\u25CB';
                setPieces(newPieces);
                setValeur(index);
            }
            else if (pieces[index] === '♙') {
                const movePossible = index - 8;
                console.log("La case ou le pion peut se déplacer: " + valeur);
                const newPieces = [...pieces];
                newPieces[movePossible] = '\u25CB';
                setPieces(newPieces);
                setValeur(index);
            }
            if(pieces[index] === "\u25CB"){
                const newPieces = [...pieces];
                newPieces[index] = newPieces[valeur];
                newPieces[valeur] = '';
                setPieces(newPieces);
            }
        }

    



        // const newPieces = [...pieces];
        // newPieces[index] = '♞';
        // setPieces(newPieces);
    };

    // Générer les cases de l'échiquier
    const renderSquare = (i) => (
        <Square key={i} index={i} piece={pieces[i]} onClick={handleSquareClick} />
    );

    // Générer toutes les cases de l'échiquier
    const squares = Array(64).fill(null).map((_, i) => renderSquare(i));

    return <div className="board">{squares}</div>;
};

export default Board;
