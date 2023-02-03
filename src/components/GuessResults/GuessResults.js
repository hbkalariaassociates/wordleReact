import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";

function GuessResults({ guesses }) {
  let NUM_OF_ROWS = 6;

  function convertToWord(guess) {
    if (guess === undefined) return undefined;
    let word = [];
    guess.map(({ letter }) => word.push(letter));
    return word.join("");
  }

  return (
    <div className="guess-results">
      {range(NUM_OF_ROWS).map((row) => (
        <Guess key={row} guess={guesses?.[row]}>
          {convertToWord(guesses?.[row])}
        </Guess>
      ))}
    </div>
  );
}

export default GuessResults;
