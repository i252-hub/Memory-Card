import React, { useState, useEffect } from "react";
import axios from "axios";
import Game from "./Game";
import Scoreboard from "./Scoreboard";
import './App.css';

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=12")
      .then(response => {
        const fetchPokemonData = async () => {
          const pokemonData = await Promise.all(
            response.data.results.map(async (pokemon, index) => {
              const pokemonDetail = await axios.get(pokemon.url);
              return {
                id: index + 1,
                name: pokemon.name,
                image: pokemonDetail.data.sprites.front_default, // Fetch the image URL from the response
              };
            })
          );
          setCards(pokemonData);
        };
  
        fetchPokemonData();
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  

  return (
    <div className="App">
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <Game
        cards={cards}
        setCurrentScore={setCurrentScore}
        setBestScore={setBestScore}
      />
    </div>
  );
}

export default App;
