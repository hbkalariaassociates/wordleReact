import React from "react";

function Guess({ guess, children }) {
  if (children === undefined || children === null) children = "     ";
  return (
    <p className="guess">
      {children.split("").map((char, index) => (
        <span className={`cell ${guess?.[index]["status"]}`} key={index}>
          {char}
        </span>
      ))}
    </p>
  );
}

export default Guess;
