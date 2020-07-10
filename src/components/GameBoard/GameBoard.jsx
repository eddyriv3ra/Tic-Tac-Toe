import React, { useState } from "react";
import Squares from "../Squares";
import styles from "./GameBoard.module.scss";

const initialState = [
  { id: 0, value: "" },
  { id: 1, value: "" },
  { id: 2, value: "" },
  { id: 3, value: "" },
  { id: 4, value: "" },
  { id: 5, value: "" },
  { id: 6, value: "" },
  { id: 7, value: "" },
  { id: 8, value: "" },
];

const GameBoard = () => {
  const [boxes, setBoxes] = useState(initialState);
  const [isNext, setIsNext] = useState(false);

  const onSquareClick = (id) => {
    const boxesCopy = [...boxes];
    const updatesBoxes = boxesCopy.map((box) => {
      if (box.id === id) {
        const value = (box.value = !isNext ? "X" : "O");
        return { ...box, value };
      }
      return box;
    });
    setBoxes(updatesBoxes);
    setIsNext(!isNext);
  };

  const resetStartAgain = () => {
    const boxesCopy = [...boxes];
    const updatesBoxes = boxesCopy.map((box) => {
      const value = (box.value = "");
      return { ...box, value };
    });
    setBoxes(updatesBoxes);
    setIsNext(false);
  };
  return (
    <div className={styles.gameBoard}>
      <div className={styles.winner}>Winner: </div>
      <div className={styles.nextPlayer}>Next player: {isNext ? "O" : "X"}</div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={resetStartAgain}>
          Reset/Start Again
        </button>
      </div>
      <div className={styles.squaresContainer}>
        {boxes.map((box) => {
          return (
            <Squares
              key={box.id}
              id={box.id}
              value={box.value}
              onClick={onSquareClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GameBoard;
