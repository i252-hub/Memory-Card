import React from "react";
import './Scoreboard.css';

const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <div className="scoreboard">
      <h2>Memory Game</h2>
      <p>Score: {currentScore}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
};

export default Scoreboard;
