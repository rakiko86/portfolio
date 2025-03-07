import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const text = "Bonjour! Je suis Rekia développeuse front-end";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 150);

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return <span className="typing-effect">{displayedText}</span>;
};

export default TypingEffect;
