import React, { useState, useEffect } from "react";
import Card from "./Card";
import './Game.css';

const Game = ({ cards, setCurrentScore, setBestScore }) => {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null); // Only one card selected at a time
  const [matchedCards, setMatchedCards] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    // Shuffle the cards whenever the cards prop changes
    setShuffledCards(cards.sort(() => Math.random() - 0.5));
  }, [cards]);

  // Handle card click
  const handleCardClick = (card) => {
    // Prevent clicking the same card twice or flipping already matched cards
    if (matchedCards.includes(card.name) || card === selectedCard) {
      return;
    }

    // Start the game on the first click
    if (!gameStarted) {
      setGameStarted(true);
    }

    if (selectedCard) {
      // Check for a match
      if (selectedCard.name === card.name) {
        // If matched, add to matched cards and increase the score
        setMatchedCards((prevMatched) => [...prevMatched, selectedCard.name, card.name]);
        setCurrentScore((prev) => prev + 1);

        // Update best score if needed
        if (currentScore + 1 > bestScore) {
          setBestScore(currentScore + 1);
        }
      }

      // Reset selected card after a short delay (1 second)
      setTimeout(() => {
        setSelectedCard(null);
      }, 1000);
    } else {
      // If no card is selected, select the current card
      setSelectedCard(card);
    }
  };

  return (
    <div className="game">
      {shuffledCards.map((card, index) => (
        <Card
          key={card.name} // Use unique identifier (card.name) as the key
          card={card}
          handleClick={handleCardClick}
          isFlipped={selectedCard === card || matchedCards.includes(card.name)}
        />
      ))}
    </div>
  );
};

export default Game;
