import React, { useEffect, useState } from 'react';

const Typewriter = ({ text, maxWidth, wordDelay }) => {
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    let currentCharIndex = 0;

    const animateTypewriter = () => {
      if (currentCharIndex < text.length) {
        setAnimatedText((prevText) => prevText + text[currentCharIndex]);
        currentCharIndex++;
        setTimeout(animateTypewriter, wordDelay);
      } else if (currentCharIndex === text.length) {
        // Animation is complete, no need to continue
        return;
      }
    };

    const timeoutId = setTimeout(animateTypewriter, 0);

    return () => {
      // Clear the timeout when the component is unmounted
      clearTimeout(timeoutId);
    };
  }, [text, wordDelay]);

  return (
    <div className={`typewriter-container ${maxWidth && 'text-wrap'}`} style={{ maxWidth: `${maxWidth}px` }}>
      <p className="typewriter-text">{animatedText}</p>
    </div>
  );
};

export default Typewriter;
