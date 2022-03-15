import React, { useEffect, useState } from "react";

const Letter = ({ letter, idx }) => {
  const [hover, sethover] = useState(false);

  useEffect(() => {
    const timeDelay = idx * 100 + Math.floor(Math.random() * 900 + 300);
    handleHover(timeDelay);
  }, []);

  const handleHover = (ms) => {
    if (hover) return;
    sethover(true);
    setTimeout(() => {
      sethover(false);
    }, ms);
  };

  return (
    <span
      onMouseEnter={() => handleHover(600)}
      className={hover ? "hover" : ""}
    >
      {letter}
    </span>
  );
};

export default Letter;
