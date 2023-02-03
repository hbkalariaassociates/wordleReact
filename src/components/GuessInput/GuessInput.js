import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { checkGuess } from "../../game-helpers";

function GuessInput({
  guesses,
  setGuesses,
  answer,
  gameStatus,
  setGameStatus,
}) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (guesses.length < NUM_OF_GUESSES_ALLOWED) {
          if (guess === answer) setGameStatus({ isWon: true, isLost: false });
          else if (guesses.length === 5)
            setGameStatus({ isWon: false, isLost: true });
          let reply = checkGuess(guess, answer);
          let nextGuesses = [...guesses, reply];
          setGuesses(nextGuesses);
          setGuess("");
        }
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toLocaleUpperCase())}
        maxLength={5}
        minLength={5}
        disabled={gameStatus["isWon"] || gameStatus["isLost"]}
      />
    </form>
  );
}

export default GuessInput;
