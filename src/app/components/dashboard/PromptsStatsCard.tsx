"use client";
import React from "react";
import "@fontsource/plus-jakarta-sans"; // Ensure this is installed via npm or yarn

export default function PromptsStatsCard() {
  return (
    <div className="flex flex-col items-center justify-center h-[35vh] bg-[#2E3258] rounded-2xl mt-10">
      <p
        className="font-[Plus Jakarta Sans] font-bold bg-gradient-to-l to-[#F5F1FF] from-[#6633EE] bg-clip-text text-transparent"
        style={{ fontSize: "62px" }}
      >
        25M
      </p>
      <p
        className="font-[Plus Jakarta Sans] mt-2 tracking-wide bg-gradient-to-l to-[#F5F1FF] from-[#6633EE] bg-clip-text text-transparent"
        style={{ fontSize: "18px" }}
      >
        created prompts
      </p>
    </div>
  );
}
