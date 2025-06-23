"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

// TimelineCardProps Type
type TimelineCardProps = {
  title: string;
  description: string;
  date: string;
  direction?: "left" | "right";
};

// TimelineCard Component
function TimelineCard({
  title,
  description,
  date,
  direction = "right",
}: TimelineCardProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="bg-gradient-to-r from-[#A187FF] to-[#6633EE] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden
                 w-full max-w-[90vw] sm:w-[430px] sm:h-[220px]"
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

      {/* Background image positioned absolutely at the end of card */}
      {/* Background image positioned absolutely at the end of card */}
      <div
        className="absolute bottom-4 right-0 w-20 h-10 bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url('/Union.png')",
          zIndex: 0,
        }}
      />

      {/* Icon absolutely positioned exactly over Union image */}
      <div className="absolute bottom-[22px] right-[46px] w-7 h-7 z-10">
        <Image src="/icon.png" alt="" width={30} height={30} />
      </div>
    </motion.div>
  );
}

// Timeline Data
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

// Roadmap Component
export default function Roadmap() {
  return (
    <section className="min-h-screen w-full overflow-hidden relative">
      {/* Scrollable timeline section */}
      <div className="min-h-screen overflow-y-scroll scroll-smooth hide-scrollbar">
        <div className="min-h-[200vh] w-full flex flex-col items-center justify-center py-20 relative">
          {/* Responsive Blurred Background - Hidden on small screens */}
          <div
            className="hidden sm:block fixed inset-0 z-0"
            style={{
              backgroundImage: "url('/Spherebg.png')",
              backgroundSize: "700px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              filter: "blur(8px)",
              transform: "scale(1.1)",
            }}
          />

          {/* Vertical Timeline Line - Hidden on small screens */}
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 transform -translate-x-1/2 z-10" />

          {/* Timeline Cards */}
          <div className="relative z-20 flex flex-col space-y-24 w-full max-w-5xl px-4">
            {timelineData?.map((card, index) => {
              const isLeft = index % 2 !== 0;

              return (
                <div
                  key={index}
                  className={`
                    relative flex justify-center items-center w-full
                    sm:${isLeft ? "justify-start" : "justify-end"}
                  `}
                  style={{ minHeight: "160px" }}
                >
                  {/* Center Dot - Visible only on sm and above */}
                  <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 bg-[#A187FF] rounded-full shadow-lg w-4 h-4 z-20" />

                  {/* Card Placement */}
                  <div
                    className={`
                      w-full max-w-[90vw]
                      sm:w-auto
                      ${
                        isLeft
                          ? "sm:ml-[calc(50%+16px)]"
                          : "sm:mr-[calc(50%+16px)]"
                      }
                    `}
                  >
                    <TimelineCard
                      {...card}
                      direction={isLeft ? "left" : "right"}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
