"use client";
import { useState } from "react";

export default function ToggleCard() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center justify-center h-[25vh] bg-[#2E3258] rounded-2xl">
      <div className="relative w-[120px] h-[60px]">
        <input
          type="checkbox"
          id="toggle"
          className="hidden"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <label
          htmlFor="toggle"
          className={`block w-full h-full rounded-full cursor-pointer transition-all duration-300 
            bg-[#1e2040] shadow-[inset_0_0_6px_rgba(255,255,255,0.1),_0_8px_20px_rgba(0,0,0,0.4)]`}
        >
          <span
            className={`absolute top-1/2 transform -translate-y-1/2 w-[48px] h-[48px] rounded-full flex items-center justify-center text-white text-xl
              transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.3)]
              ${
                checked
                  ? "left-[66px] bg-gradient-to-br from-orange-400 to-red-400"
                  : "left-[8px] bg-gradient-to-br from-orange-300 to-yellow-400"
              }`}
          >
            ✨
          </span>
        </label>
      </div>
    </div>
  );
}
