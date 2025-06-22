"use client";
import Image from "next/image";
import * as React from "react";

export function TemplateAiCard() {
  const [imageError, setImageError] = React.useState(false);

  return (
    <section className="w-full max-w-[768px] mx-auto text-white font-sans p-4">
      {/* Top Gradient Header */}
      {/* Header Section */}
      <div className="relative min-h-[45vh] bg-gradient-to-b from-[#9B6BFF] to-[#3D2D75] rounded-[2rem] pt-14 pb-40 text-center overflow-hidden z-10">
        <h1 className="text-5xl sm:text-6xl font-bold z-10 relative">
          Template Ai
        </h1>

        {/* Curve at bottom */}
        <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 w-[330px] h-[220px] bg-[#141229] rounded-t-full z-0" />
      </div>

      {/* Image Section */}
      <div className="relative -mt-40 z-20 flex items-center justify-center">
        {/* Curved transition background at overlap */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] bg-[#141229] rounded-full z-0 shadow-2xl" />

        {/* Image Wrapper */}
        <div className="relative w-[420px] sm:w-[460px]">
          {/* Round.png below Sphere */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <Image
              src="/Round.png"
              alt="Border Circle"
              width={700} // increased
              height={700} // increased
              className="object-cover rounded-full w-full h-auto"
            />
          </div>

          {/* Centered Sphere Image */}
          <div className="relative z-10 flex items-center justify-center p-6">
            {!imageError ? (
              <Image
                src="/Sphere.png"
                alt="AI Concept"
                width={700} // increased
                height={700} // increased
                className="object-cover rounded-full w-full h-auto"
                onError={() => setImageError(true)}
              />
            ) : (
              <Image
                src="https://placehold.co/600x400/CCCCCC/000000?text=Image+Unavailable"
                alt="Fallback"
                width={700}
                height={700}
                className="object-cover rounded-full w-full h-auto"
              />
            )}
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="flex flex-col sm:flex-row justify-center z-10 relative -mt-60 gap-5">
        <div className="flex-1 rounded-2xl p-6 min-w-[280px]">
          <Image src="/card1.png" alt="" width={400} height={400} />
        </div>
        <div className="flex-1 rounded-2xl p-6 min-w-[280px]">
          <Image src="/card2.png" alt="" width={400} height={400} />
        </div>
      </div>
    </section>
  );
}

export default TemplateAiCard;
