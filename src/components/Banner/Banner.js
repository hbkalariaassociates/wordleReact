import React from "react";

function Banner({ gameStatus, answer, guesses }) {
  if (gameStatus["isWon"] === true) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{guesses.length} guesses</strong>.
        </p>
      </div>
    );
  } else if (gameStatus["isLost"] === true) {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default Banner;
