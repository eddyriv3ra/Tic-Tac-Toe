import React from "react";
import GameBoard from "./components/GameBoard";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.appContainer}>
      <GameBoard />
    </div>
  );
}

export default App;
