import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState({
    isWon: false,
    isLost: false,
  });
  return (
    <>
      <Banner answer={answer} guesses={guesses} gameStatus={gameStatus} />
      <GuessResults guesses={guesses} />
      <GuessInput
        guesses={guesses}
        setGuesses={setGuesses}
        answer={answer}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
      />{" "}
    </>
  );
}

export default Game;
