import React, { useEffect } from "react";

interface Props {
  chessArray: Array<Array<number>>;
  selectedSquare: Array<number>;
  setSelectedSquare: (square: Array<number>) => void;
  squareHandler: (square: Array<number>) => void;
  nextSquares: Array<Array<number>>;
}

export const ChessBoard: React.FC<Props> = ({
  chessArray,
  selectedSquare,
  setSelectedSquare,
  squareHandler,
  nextSquares,
}) => {
  const allIDs = chessArray.map((square) => square.toString());

  allIDs.map((id) => {
    const square = document.getElementById(id);
    if (square) {
      square.classList.remove("next", "selected");
    }
  });

  const nextIDs = nextSquares.map((square) => square.toString());

  nextIDs.map((id) => {
    const square = document.getElementById(id);
    if (square) {
      square.classList.add("next");
    }
  });

  const selectedID = selectedSquare.toString();
  const currentSquare = document.getElementById(selectedID);

  if (currentSquare) {
    currentSquare.classList.add("selected");
  }

  return (
    <div className="chessboard">
      {chessArray.map((coord: Array<number>) => {
        return (
          <div
            className="square"
            id={coord.toString()}
            onClick={() => squareHandler(coord)}
          ></div>
        );
      })}
    </div>
  );
};
