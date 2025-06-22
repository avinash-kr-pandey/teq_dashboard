import * as React from "react";
import { useState } from "react";
import { FaImage } from "react-icons/fa";

export default function App() {
  return <GenerateToggleCard />;
}

export function GenerateToggleCard() {
  const [activeTab, setActiveTab] = useState("generate");

  return (
    <article className="flex overflow-hidden relative flex-col justify-center px-8 py-14 mt-7 w-full text-xl font-medium leading-snug text-white whitespace-nowrap aspect-[1.598] min-h-[180px] max-md:px-5 rounded-3xl shadow-xl">
      {/* Solid background instead of gradient */}
      <div className="absolute inset-0 size-full bg-[#191934] opacity-100 rounded-3xl"></div>

      <div className="relative flex overflow-hidden p-2 w-full bg-slate-900 bg-opacity-50 min-h-[76px] rounded-full shadow-inner shadow-black/30">
        {/* Sliding background with inset spacing */}
        <div
          className={`absolute inset-2 rounded-full bg-gradient-to-br transition-all duration-300 ease-in-out ${
            activeTab === "generate"
              ? "from-purple-600 to-indigo-800 left-2 right-2"
              : "from-purple-600 to-indigo-800 left-1/2 w-1/2"
          }`}
        />

        {/* Generate Button */}
        <button
          className={`relative flex flex-col flex-1 shrink gap-1.5 justify-center items-center p-3 aspect-[3.25] basis-0 size-full z-10 transition-colors duration-300 ease-in-out ${
            activeTab === "generate" ? "text-white" : "text-white/60"
          }`}
          onClick={() => setActiveTab("generate")}
          aria-pressed={activeTab === "generate"}
        >
          <div className="flex items-center gap-2">
            <FaImage className="text-xl" />
            <span className="relative my-auto">Generate</span>
          </div>
        </button>

        {/* Explore Button */}
        <button
          className={`relative flex flex-col flex-1 shrink gap-1.5 justify-center items-center p-3 aspect-[3.25] basis-0 size-full z-10 transition-colors duration-300 ease-in-out ${
            activeTab === "explore" ? "text-white" : "text-white/60"
          }`}
          onClick={() => setActiveTab("explore")}
          aria-pressed={activeTab === "explore"}
        >
        
        </button>
      </div>
    </article>
  );
}
