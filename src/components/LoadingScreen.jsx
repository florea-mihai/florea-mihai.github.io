import { useEffect, useRef, useState } from "react";

// Minimal, premium animated logo (rotating ring with subtle pulse)
const AnimatedLogo = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    className="mb-8 animate-spin-slow"
    style={{ filter: "drop-shadow(0 0 10px #38bdf8cc)" }}
    aria-hidden="true"
  >
    <circle
      cx="30"
      cy="30"
      r="25"
      stroke="#1e293b"
      strokeWidth="4"
      opacity="0.25"
    />
    <circle
      cx="30"
      cy="30"
      r="25"
      stroke="#38bdf8"
      strokeWidth="4"
      strokeDasharray="80 100"
      strokeLinecap="round"
      className="animate-pulse"
    />
    <circle
      cx="30"
      cy="30"
      r="6"
      fill="#38bdf8"
      opacity="0.9"
    />
  </svg>
);

// Subtle animated dots for loader
const AnimatedDots = () => (
  <div className="flex items-center justify-center gap-1 mt-6">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-70 animate-bounce"
        style={{ animationDelay: `${i * 0.18}s` }}
      />
    ))}
  </div>
);

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);
  const fullText = "<Hello World />";
  const typingSpeed = 70;
  const delayAfterTyping = 600;
  const timeouts = useRef([]);

  useEffect(() => {
    let index = 0;
    const typeText = () => {
      if (index <= fullText.length) {
        setText(fullText.substring(0, index));
        index++;
        timeouts.current.push(setTimeout(typeText, typingSpeed));
      } else {
        setShowWelcome(true);
        timeouts.current.push(setTimeout(onComplete, 900));
      }
    };
    typeText();
    return () => {
      timeouts.current.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center px-8 py-10 rounded-2xl shadow-xl border border-blue-900/30 bg-white/5 backdrop-blur-md animate-fade-in">
        {/* Animated Logo */}
        <AnimatedLogo />

        {/* Typing Text */}
        <div className="mb-2 text-3xl md:text-4xl font-mono font-semibold flex items-center text-blue-200 tracking-tight">
          {text}
          <span className="animate-blink ml-1 text-blue-400">|</span>
        </div>

        {/* Welcome message fade-in after typing */}
        <div
          className={`text-blue-300 text-base font-medium mb-6 transition-opacity duration-700 ${
            showWelcome ? "opacity-100" : "opacity-0"
          }`}
        >
          Portfolio loading...
        </div>

        {/* Sleek loading bar */}
        <div className="w-[180px] h-[3px] bg-blue-900/30 rounded-full relative overflow-hidden mb-2">
          <div className="absolute left-0 top-0 h-full bg-blue-400 rounded-full animate-loading-bar" style={{ width: "40%" }} />
        </div>

        {/* Animated Dots */}
        <AnimatedDots />
      </div>
      {/* Custom CSS for SVG and bar animation */}
      <style>
        {`
        .animate-spin-slow {
          animation: spin 2.2s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        .animate-blink {
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-loading-bar {
          animation: loading-bar-move 1.2s cubic-bezier(.4,0,.2,1) infinite;
        }
        @keyframes loading-bar-move {
          0% { left: -40%; width: 40%; }
          50% { left: 30%; width: 60%; }
          100% { left: 100%; width: 40%; }
        }
        `}
      </style>
    </div>
  );
};