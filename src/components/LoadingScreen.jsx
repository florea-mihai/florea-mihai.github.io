import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World />";
  const typingSpeed = 100; // Typing speed in milliseconds
  const delayAfterTyping = 1000; // Delay before calling onComplete

  useEffect(() => {
    let index = 0;

    const typeText = () => {
      if (index <= fullText.length) {
        setText(fullText.substring(0, index));
        index++;
        setTimeout(typeText, typingSpeed);
      } else {
        setTimeout(onComplete, delayAfterTyping);
      }
    };

    typeText();

    return () => {
      // Cleanup timeout if the component unmounts
      setText("");
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center"
      aria-live="polite"
    >
      {/* Typing Text */}
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      {/* Loading Bar */}
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};