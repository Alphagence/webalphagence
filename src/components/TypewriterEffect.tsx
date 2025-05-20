
import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text?: string;
  typingSpeed?: number;
  pauseTime?: number;
}

const TypewriterEffect = ({ 
  text = "alphagence-creative", 
  typingSpeed = 100,
  pauseTime = 3000
}: TypewriterEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    // Cursor blinking animation
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (displayText.length < text.length) {
        // Type characters one by one
        timeout = setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Pause at full text
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseTime);
      }
    } else {
      if (displayText.length > 0) {
        // Delete characters one by one
        timeout = setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length - 1));
        }, typingSpeed / 2);
      } else {
        // Start over when empty
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, pauseTime / 2);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, text, typingSpeed, pauseTime]);

  return (
    <span className="inline-block font-mono">
      {displayText}
      <span className={`inline-block w-1 h-4 ml-1 bg-alphagence-gold ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
    </span>
  );
};

export default TypewriterEffect;
