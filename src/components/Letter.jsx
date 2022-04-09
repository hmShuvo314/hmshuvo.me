import React, { useEffect, useState } from "react";

const Letter = ({ letter, idx }) => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    if (hover) return;
    setHover(true);

    setTimeout(() => setHover(false), 600);
  };

  return (
    <span onMouseEnter={handleHover} className={hover ? "hover" : ""}>
      {letter}
    </span>
  );
};

export default Letter;
