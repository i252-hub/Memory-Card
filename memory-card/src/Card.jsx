import React from "react";
import './Card.css';

const Card = ({ card, handleClick, isFlipped }) => {
  return (
    <div className="card" onClick={() => handleClick(card)}>
      {isFlipped ? (
        <div>
          <img src={card.image} alt={card.name} />
          <p>{card.name}</p>
        </div>
      ) : (
        <div className="card-back">?</div>
      )}
    </div>
  );
};

export default Card;
