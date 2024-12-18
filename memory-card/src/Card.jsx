import React from "react";
import "./Card.css";

const Card = ({ card, handleClick }) => {
  return (
    <div className="card" onClick={() => handleClick(card)}>
      <img src={card.image} alt={card.name} />
      <p>{card.name}</p>
    </div>
  );
};

export default Card;
