"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type TimelineCardProps = {
  title: string;
  description: string;
  date: string;
  direction?: "left" | "right";
  isCenter?: boolean;
};

function TimelineCard({
  title,
  description,
  date,
  direction = "right",
  isCenter = false,
}: TimelineCardProps) {
  const scale = isCenter ? 1.05 : 1;
  const brightness = isCenter ? 1 : 0.8;
  const shadow = isCenter
    ? "0 10px 30px rgba(101, 46, 255, 0.6)"
    : "0 4px 15px rgba(0,0,0,0.2)";

  return (
    <motion.div
      className={`
        bg-gradient-to-r from-[#A187FF] to-[#6633EE] rounded-2xl p-6 text-white relative overflow-hidden
        w-full max-w-[90vw] sm:w-[430px] 
        sm:h-[33.33vh] flex flex-col justify-between
        transition-transform duration-300
        ${
          // On medium and up, margin-left for left cards, margin-right for right cards
          direction === "left"
            ? "sm:ml-[calc(50%+50px)]"
            : "sm:mr-[calc(50%+40px)]"
        }
        // On small screens, center all cards
        max-sm:mx-auto max-sm:sm:w-full
      `}
      style={{
        scale,
        filter: `brightness(${brightness})`,
        boxShadow: shadow,
        zIndex: isCenter ? 30 : 10,
      }}
    >
      <h2
        style={{
          color: "#fff",
          fontSize: "24px",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        {title}
      </h2>
      <p
        className="mt-2"
        style={{
          color: "#fff",
          fontSize: "16px",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        {description}
      </p>
      <p
        className="mt-4"
        style={{
          color: "#fff",
          fontSize: "16px",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        {date}
      </p>
      <div
        className="absolute bottom-4 right-0 w-20 h-10 bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url('/Union.png')",
          zIndex: 0,
        }}
      />
      <div className="absolute bottom-[22px] right-[46px] w-7 h-7 z-10">
        <Image src="/icon.png" alt="" width={30} height={30} />
      </div>
    </motion.div>
  );
}

const timelineData: TimelineCardProps[] = [
  {
    title: "Your AI Prompt Companion",
    description: "Explore multiple prompt directions with branching.",
    date: "Start from 2023",
  },
  {
    title: "Next Milestone",
    description: "Implement intelligent suggestions and auto-complete.",
    date: "Start from 2024",
  },
  {
    title: "User Collaboration",
    description: "Add shared prompt workspaces and commenting.",
    date: "Start from 2024",
  },
  {
    title: "Mobile Support",
    description: "Full-featured mobile app release.",
    date: "Start from 2025",
  },
  {
    title: "AI Personalization",
    description: "Adaptive prompts based on user style.",
    date: "Start from 2025",
  },
  {
    title: "Marketplace",
    description: "Share and sell prompt templates.",
    date: "Start from 2025",
  },
];

export default function Roadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState(0);
  const [cardHeightPx, setCardHeightPx] = useState(0);

  // On mount and resize, calculate card height
  useEffect(() => {
    if (!containerRef.current) return;

    const handleResize = () => {
      if (!containerRef.current) return;
      const cardElement = containerRef.current.querySelector(
        ".timeline-card"
      ) as HTMLElement;
      if (cardElement) {
        setCardHeightPx(cardElement.clientHeight);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // On scroll, calculate which card is center
  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!cardHeightPx) return;
    const scrollTop = e.currentTarget.scrollTop;
    const centerPosition = scrollTop + cardHeightPx * 1.5;
    let index = Math.floor(centerPosition / cardHeightPx);
    if (index < 0) index = 0;
    if (index >= timelineData.length) index = timelineData.length - 1;
    setCenterIndex(index);
  };

  return (
    <section className="min-h-screen w-full overflow-hidden relative bg-[#1a172e] py-10">
      <div
        ref={containerRef}
        className="w-full overflow-y-scroll hide-scrollbar"
        style={{
          height: "100vh",
          scrollSnapType: "y proximity",
          scrollBehavior: "smooth",
        }}
        onScroll={onScroll}
      >
        <div
          className="flex flex-col items-center justify-start relative w-full max-w-5xl mx-auto"
          style={{
            height: `${timelineData.length * 33.33}vh`,
          }}
        >
          {/* Center vertical timeline line, hidden on small */}
          <div
            className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 transform -translate-x-1/2 z-10 pointer-events-none"
            aria-hidden="true"
          />

          {timelineData.map((card, index) => {
            const isLeft = index % 2 !== 0;
            const isCenter = index === centerIndex;

            return (
              <div
                key={index}
                className={`timeline-card relative flex items-center w-full
                  max-sm:justify-center
                  sm:${isLeft ? "justify-start" : "justify-end"}
                `}
                style={{
                  height: "33.33vh",
                  scrollSnapAlign: "start",
                }}
              >
                {/* Center dot on timeline line */}
                <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 bg-[#A187FF] rounded-full shadow-lg w-4 h-4 z-20 pointer-events-none" />
                <TimelineCard
                  {...card}
                  direction={isLeft ? "left" : "right"}
                  isCenter={isCenter}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
