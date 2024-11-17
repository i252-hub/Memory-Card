import React from "react";
import './Scoreboard.css';

const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <>
    <h2>Memory Game</h2>
    <div className="scoreboard">
      <p>Score: {currentScore}</p>
      <p>Best Score: {bestScore}</p>
    </div>
    </>
  );
};

export default Scoreboard;
