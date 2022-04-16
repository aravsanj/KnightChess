import React, { useEffect } from "react";
import { ChessBoard } from "./ChessBoard";

export const Chess: React.FC = () => {
  const chessArray: Array<Array<number>> = [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [0, 7],
    [1, 0],
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6],
    [1, 7],
    [2, 0],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
    [2, 5],
    [2, 6],
    [2, 7],
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 3],
    [3, 4],
    [3, 5],
    [3, 6],
    [3, 7],
    [4, 0],
    [4, 1],
    [4, 2],
    [4, 3],
    [4, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [5, 0],
    [5, 1],
    [5, 2],
    [5, 3],
    [5, 4],
    [5, 5],
    [5, 6],
    [5, 7],
    [6, 0],
    [6, 1],
    [6, 2],
    [6, 3],
    [6, 4],
    [6, 5],
    [6, 6],
    [6, 7],
    [7, 0],
    [7, 1],
    [7, 2],
    [7, 3],
    [7, 4],
    [7, 5],
    [7, 6],
    [7, 7],
  ];

  const knightMoves: Array<Array<number>> = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ];

  const [selectedSquare, setSelectedSquare] = React.useState<Array<number>>([]);
  const [nextSquares, setNextSquares] = React.useState<Array<Array<number>>>(
    []
  );

  const squareHandler = (coord: Array<number>) => {
    setSelectedSquare(coord);
    setNextSquares([]);
  };

  const calculateNextMoves = (currentOrigin: Array<number>) => {
    const [x, y] = currentOrigin;
    const nextMoves = knightMoves.map((move) => {
      const [xMove, yMove] = move;
      return [x + xMove, y + yMove];
    });
    return nextMoves;
  };

  useEffect(() => {
    const possibleNextOrigins = calculateNextMoves(selectedSquare);

    const actualNextOrigins = possibleNextOrigins.filter((nextOrigin) => {
      const [x, y] = nextOrigin;
      if (x < 0 || x > 7 || y < 0 || y > 7) {
        return false;
      } else return true;
    });
    setNextSquares(actualNextOrigins);
  }, [selectedSquare]);

  return (
    <div className="chessOuter">
      <ChessBoard
        chessArray={chessArray}
        selectedSquare={selectedSquare}
        setSelectedSquare={setSelectedSquare}
        squareHandler={squareHandler}
        nextSquares={nextSquares}
      />
    </div>
  );
};
