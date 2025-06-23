"use client";
import * as React from "react";
// import TopUsersCardModal from "../Modals/TopUsersCardModal";
import SliderModal from "../Modals/SliderModal";

export function TopUsersCard() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);


  const handleCardClick = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <article
        className="flex flex-col justify-center px-8 py-9 mt-7 w-full aspect-[1.191] min-h-[220px] rounded-2xl bg-gradient-to-b from-[#1a172e] to-[#0f0d21] text-center text-white shadow-lg cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="text-6xl font-semibold tracking-tighter leading-none text-gradient bg-gradient-to-r from-orange-300 to-pink-400 bg-clip-text text-transparent">
          20
        </div>
        <div className="mt-3 text-lg text-indigo-300">Top Users</div>

        <div className="flex justify-center mt-5 gap-[-10px] relative z-10">
          {/* Avatar 1 */}
          <div className="w-14 h-14 rounded-full border-[3px] border-[#0f0d21] overflow-hidden">
            <div className="w-full h-full bg-orange-300 flex items-center justify-center text-white font-bold">
              {/* Placeholder Avatar */}
              👨
            </div>
          </div>

          {/* Avatar 2 (decorative center circle) */}
          <div className="w-14 h-14 rounded-full border-[3px] border-[#0f0d21] bg-[#fef3f2] flex items-center justify-center mx-[-6px] z-20">
            <div className="w-6 h-6 bg-orange-400 rotate-45 rounded-sm"></div>
          </div>

          {/* Avatar 3 */}
          <div className="w-14 h-14 rounded-full border-[3px] border-[#0f0d21] overflow-hidden">
            <div className="w-full h-full bg-purple-400 flex items-center justify-center text-white font-bold">
              👩
            </div>
          </div>
        </div>
      </article>

      <SliderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
