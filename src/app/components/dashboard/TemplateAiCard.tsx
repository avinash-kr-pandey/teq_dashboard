"use client";
import Image from "next/image";
import * as React from "react";

export function TemplateAiCard() {
  const [imageError, setImageError] = React.useState(false);

  return (
    <section className="w-full max-w-[768px] mx-auto text-white font-sans p-4">
      {/* Top Gradient Header */}
      <div className="relative min-h-[40vh] sm:min-h-[45vh] bg-gradient-to-b from-[#9B6BFF] to-[#3D2D75] rounded-[2rem] pt-10 sm:pt-14 pb-32 sm:pb-40 text-center overflow-hidden z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold z-10 relative">
          Template Ai
        </h1>

        {/* Curve at bottom */}
        <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 w-[250px] sm:w-[330px] h-[180px] sm:h-[220px] bg-[#141229] rounded-t-full z-0" />
      </div>

      {/* Image Section */}
      <div className="relative -mt-32 sm:-mt-40 z-20 flex items-center justify-center">
        {/* Circle Background - hide on small screens */}
        <div className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] bg-[#141229] rounded-full z-0 shadow-2xl" />

        {/* Image Wrapper - responsive */}
        <div className="relative w-[70vw] max-w-[300px] sm:w-[460px] sm:max-w-[460px]">
          {/* Round.png */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <Image
              src="/Round.png"
              alt="Border Circle"
              width={700}
              height={700}
              className="object-cover rounded-full w-full h-auto"
            />
          </div>

          {/* Sphere Image */}
          <div className="relative z-10 flex items-center justify-center p-4 sm:p-6">
            {!imageError ? (
              <Image
                src="/Sphere.png"
                alt="AI Concept"
                width={700}
                height={700}
                className="object-cover rounded-full w-full h-auto rotate-slow"
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

      {/* Bottom Cards - responsive and stacked */}
      <div className="flex flex-row md-mt-0 sm:flex-row justify-center z-10 relative -mt-35 sm:-mt-60 gap-4 sm:gap-5 px-2">
        <div className="flex-1 rounded-2xl p-4 min-w-[180px] max-w-[280px] mx-auto">
          <Image
            src="/card1.png"
            alt="Card 1"
            width={400}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="flex-1 rounded-2xl p-4 min-w-[180px] max-w-[280px] mx-auto">
          <Image
            src="/card2.png"
            alt="Card 2"
            width={400}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default TemplateAiCard;
