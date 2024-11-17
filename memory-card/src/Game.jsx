import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Game.css";

const Game = ({ cards, setCurrentScore, setBestScore }) => {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]); 
  const [currentScore, setCurrentScoreState] = useState(0); 
  const [bestScore, setBestScoreState] = useState(0); 

  useEffect(() => {
    shuffleCards();
  }, [cards]);

  const shuffleCards = () => {
    setShuffledCards([...cards].sort(() => Math.random() - 0.5));
  };

  const handleCardClick = (card) => {
    if (clickedCards.includes(card.name)) {
      setBestScoreState((prevBest) => Math.max(prevBest, currentScore));
      setCurrentScoreState(0);
      setClickedCards([]);
      shuffleCards();
    } else {
      setClickedCards((prevClicked) => [...prevClicked, card.name]);
      setCurrentScoreState((prevScore) => prevScore + 1);
      shuffleCards();
    }
  };

  useEffect(() => {
    setCurrentScore?.(currentScore);
    setBestScore?.(bestScore);
  }, [currentScore, bestScore, setCurrentScore, setBestScore]);

  return (
    <div className="game">
    
      <div className="card-grid">
        {shuffledCards.map((card) => (
          <Card
            key={card.name} 
            card={card}
            handleClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
