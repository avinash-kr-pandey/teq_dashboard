"use client";
import Image from "next/image";
import * as React from "react";

export function TemplateAiCard() {
  const [imageError, setImageError] = React.useState(false);

  return (
    <section className="w-full max-w-[768px] mx-auto text-white font-sans p-4">
      {/* Top Gradient Header */}
      <div className="relative bg-gradient-to-b from-[#9B6BFF] to-[#3D2D75] rounded-[2rem] pt-10 pb-24 text-center overflow-hidden">
        <h1 className="text-4xl font-semibold z-10 relative">Template Ai</h1>
        <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-[300px] h-[100px] bg-[#141229] rounded-t-[150px] z-0" />
      </div>

      {/* Image Section */}
      <div className="relative bg-[#141229] flex items-center justify-center pt-10 pb-10 -mt-20">
        {/* Curved 360° text centered on the border */}
        <svg viewBox="0 0 360 360" className="absolute z-20 w-98 h-98">
          <defs>
            <path
              id="borderPath"
              d="M180,180 m-136,0 a 136,136 0 1,1 272,0 a 136,136 0 1,1 -272,0"
              fill="none"
            />
          </defs>
          <text fill="#ffffff" fontSize="12" fontWeight="bold">
            <textPath
              href="#borderPath"
              startOffset="0%"
              method="align"
              spacing="auto"
              textLength="855"
            >
              1100111 1001111 1001011 010 001 1001111 1100111 1001111 1001011
              
             
            </textPath>
          </text>
        </svg>

        {/* Border circle with internal gap */}
        <div className="w-64 sm:w-80 overflow-hidden relative z-10 shadow-2xl border-[16px] rounded-full border-[#3D2D75] p-4 bg-[#141229]">
          {!imageError ? (
            <Image
              src="/Sphere.png"
              alt="AI Concept"
              width={500}
              height={500}
              className="object-cover rounded-full w-full h-auto"
              onError={() => setImageError(true)}
            />
          ) : (
            <Image
              src="https://placehold.co/600x400/CCCCCC/000000?text=Image+Unavailable"
              alt="Fallback"
              width={500}
              height={500}
              className="object-cover rounded-full w-full h-auto"
            />
          )}
        </div>
      </div>

      {/* Bottom Two Cards */}
      <div className="flex flex-col sm:flex-row justify-center items-start gap-6 bg-[#141229] px-4 pb-10 rounded-b-[2rem]">
        <div className="flex-1 bg-[#1B1A2D] rounded-2xl p-6 min-w-[280px]">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-white text-xl shadow-md">
              ↴
            </div>
            <h2 className="text-lg font-semibold">Branching paths</h2>
          </div>
          <p className="text-sm text-slate-300">
            Explore multiple prompt directions with branching.
          </p>
        </div>
        <div className="flex-1 bg-[#1B1A2D] rounded-2xl p-6 min-w-[280px]">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-violet-500 flex items-center justify-center text-white text-xl shadow-md">
              ⚙
            </div>
            <h2 className="text-lg font-semibold">Ai journey</h2>
          </div>
          <p className="text-sm text-slate-300">
            Boost your prompt precision with keywords.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TemplateAiCard;
