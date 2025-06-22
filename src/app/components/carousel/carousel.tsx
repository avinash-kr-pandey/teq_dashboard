"use client";
import { useState } from "react";

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
};

const Card = ({ card, isCenter, position }: CardProps) => {
  const baseClasses = `absolute w-90 h-64 rounded-2xl p-0  transition-all duration-500 ease-in-out
    flex flex-col justify-center items-start text-left select-none
    ${
      isCenter
        ? "z-20 scale-110 shadow-2xl bg-gradient-to-br from-[#7C4DFF] to-[#9575CD] text-white"
        : "z-10 scale-90 bg-gradient-to-br from-[#7C4DFF] to-[#9575CD] text-white blur-sm opacity-70"
    }
  `;

  const positionClass =
    position === "left"
      ? "-translate-x-[110%]"
      : position === "right"
      ? "translate-x-[110%]"
      : "translate-x-0";

  return (
    <div className={`${baseClasses} ${positionClass}`}>
      {/* Icon Badge */}
      <div className="relative w-[9vw] h-full top-0">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-left bg-cover bg-no-repeat opacity-90 "
          style={{
            backgroundImage: "url('/UnionSecond.png')",
            backgroundPosition: "left center",
          }}
        ></div>

        {/* Icon on top, positioned at end of image */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 text-2xl bg-[#E27F5A] rounded-full shadow-lg mr-2">
          {card.icon}
        </div>
      </div>

      <div className="p-8">
        {/* Title */}
        <h2 className="text-2xl font-semibold mt-8 leading-snug z-10">
          {card.title}
          <br />
          <span className="block">Prompts templates</span>
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm text-white/80 z-10">{card.description}</p>
      </div>
    </div>
  );
};

const Carousel = () => {
  const [centerIndex, setCenterIndex] = useState<number>(1);

  const mod = (n: number, m: number) => ((n % m) + m) % m;

  const leftIndex = mod(centerIndex - 1, cards.length);
  const rightIndex = mod(centerIndex + 1, cards.length);

  const moveLeft = () => setCenterIndex(mod(centerIndex - 1, cards.length));
  const moveRight = () => setCenterIndex(mod(centerIndex + 1, cards.length));

  return (
    <div className="w-full max-w-5xl mx-auto min-h-[80vh] mt-12 flex justify-center items-center relative overflow-visible">
      {/* Background Blur Overlay */}
      <div className="absolute inset-0  bg-black/25 backdrop-blur-sm rounded-xl pointer-events-none z-0" />

      {/* Cards */}
      <div className="relative w-full h-[300px] flex justify-center items-center z-10 overflow-visible">
        <Card card={cards[leftIndex]} isCenter={false} position="left" />
        <Card card={cards[centerIndex]} isCenter={true} position="center" />
        <Card card={cards[rightIndex]} isCenter={false} position="right" />
      </div>

      {/* Left Arrow */}
      <button
        onClick={moveLeft}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-white z-30 focus:outline-none"
        aria-label="Previous"
      >
        <svg
          className="h-8 w-8 cursor-pointer"
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

      {/* Right Arrow */}
      <button
        onClick={moveRight}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-white z-30 focus:outline-none"
        aria-label="Next"
      >
        <svg
          className="h-8 w-8 cursor-pointer"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
