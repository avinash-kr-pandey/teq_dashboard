"use client";
import { useState, useEffect } from "react";

type CardType = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const cards: CardType[] = [
  {
    id: 1,
    icon: "⚙️",
    title: "Your Settings",
    description: "Manage your preferences.",
  },
  {
    id: 2,
    icon: "📦",
    title: "Your AI Prompt",
    description: "Use pre-made templates to jumpstart creativity.",
  },
  {
    id: 3,
    icon: "✍️",
    title: "Custom Prompts",
    description: "Create your own unique prompts.",
  },
  {
    id: 4,
    icon: "🚀",
    title: "Card Four",
    description: "This is the fourth card description.",
  },
  {
    id: 5,
    icon: "🎯",
    title: "Card Five",
    description: "This is the fifth card description.",
  },
  {
    id: 6,
    icon: "💎",
    title: "Card Six",
    description: "This is the sixth card description.",
  },
];

type CardProps = {
  card: CardType;
  isCenter: boolean;
  position: "left" | "center" | "right";
  hideIconAndBg?: boolean;
  animate?: boolean;
};

const Card = ({
  card,
  isCenter,
  position,
  hideIconAndBg,
  animate = false,
}: CardProps) => {
  const animationClass = animate ? "animate-pop" : "";

  const baseClasses = `
    rounded-2xl p-0 transition-all duration-500 ease-in-out
    flex flex-col justify-center items-start text-left select-none
    ${
      isCenter
        ? `z-20 scale-110 shadow-2xl bg-gradient-to-br from-[#7C4DFF] to-[#9575CD] text-white ${animationClass}`
        : "z-10 scale-90 bg-gradient-to-br from-[#7C4DFF] to-[#9575CD] text-white blur-sm opacity-70"
    }
  `;

  const positionClass =
    position === "left"
      ? "-translate-x-[110%] sm:absolute sm:w-[280px] w-[80vw] max-w-[280px] h-64"
      : position === "right"
      ? "translate-x-[110%] sm:absolute sm:w-[280px] w-[100vw] max-w-[380px] h-64"
      : "translate-x-0 sm:absolute sm:w-[360px] w-[100vw] max-w-[460px] h-62";

  const responsiveClasses = hideIconAndBg
    ? "relative w-full h-72 translate-x-0 scale-100 blur-0 opacity-100"
    : "";

  return (
    <div className={`${baseClasses} ${positionClass} ${responsiveClasses}`}>
      {!hideIconAndBg && (
        <div className="relative w-[8vw] h-[8vh] top-0">
          <div
            className="absolute inset-0 bg-left bg-cover bg-no-repeat opacity-80"
            style={{
              backgroundImage: "url('/UnionSecond.png')",
              backgroundPosition: "left center",
            }}
          ></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 text-2xl bg-[#E27F5A] rounded-full shadow-lg mr-2">
            {card.icon}
          </div>
        </div>
      )}
      <div className={`p-8 ${hideIconAndBg ? "pl-6" : ""}`}>
        <h2 className="text-2xl font-semibold mt-8 leading-snug z-10">
          {card.title}
          <br />
          <span className="block">Prompts templates</span>
        </h2>
        <p className="mt-2 text-sm text-white/80 z-10">{card.description}</p>
      </div>
    </div>
  );
};

type CarouselModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CarouselModal = ({ isOpen, onClose }: CarouselModalProps) => {
  const [centerIndex, setCenterIndex] = useState<number>(1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const mod = (n: number, m: number) => ((n % m) + m) % m;

  const leftIndex = mod(centerIndex - 1, cards.length);
  const rightIndex = mod(centerIndex + 1, cards.length);

  const triggerAnimate = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 400);
  };

  const moveLeft = () => {
    triggerAnimate();
    setCenterIndex(mod(centerIndex - 1, cards.length));
  };

  const moveRight = () => {
    triggerAnimate();
    setCenterIndex(mod(centerIndex + 1, cards.length));
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-md bg-opacity-50 px-4"
      style={{
        backgroundImage: "url('/Shpare.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="relative rounded-xl w-full max-w-[90vw] h-[85vh] p-6 shadow-lg bg-black/40">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl z-50 cursor-pointer"
          aria-label="Close"
        >
          ✖
        </button>

        <div className="w-full max-w-full mx-auto min-h-full flex justify-center items-center relative overflow-visible">
          <div className="absolute inset-0 rounded-xl pointer-events-none z-0" />

          <div className="relative w-full h-[300px] flex justify-center items-center z-10 overflow-visible">
            {isSmallScreen ? (
              <Card
                card={cards[centerIndex]}
                isCenter={true}
                position="center"
                hideIconAndBg
                animate={animate}
              />
            ) : (
              <>
                <Card
                  card={cards[leftIndex]}
                  isCenter={false}
                  position="left"
                />
                <Card
                  card={cards[centerIndex]}
                  isCenter={true}
                  position="center"
                  animate={animate}
                />
                <Card
                  card={cards[rightIndex]}
                  isCenter={false}
                  position="right"
                />
              </>
            )}
          </div>

          <button
            onClick={moveLeft}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-white z-30"
            aria-label="Previous"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={moveRight}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-white z-30"
            aria-label="Next"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselModal;
