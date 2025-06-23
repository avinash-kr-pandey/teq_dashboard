"use client";

import { useState } from "react";
import Image from "next/image";

type SliderItem = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
};

const Slider = () => {
  const sliderItems: SliderItem[] = [
    {
      id: 1,  
      image: "/cardimg.png",
      title: "20k Use",
      subtitle: "Monye Matt",
    },
    {
      id: 2,
      image: "/cardimg.png",
      title: "30k Use",
      subtitle: "Finance Fiona",
    },
    { id: 3, image: "/cardimg.png", title: "15k Use", subtitle: "Budget Ben" },
    {
      id: 4,
      image: "/cardimg.png",
      title: "158k Use",
      subtitle: "Budget Ben jkgas",
    },
    {
      id: 5,
      image: "/cardimg.png",
      title: "158k Use",
      subtitle: "Budget Ben sfsgf",
    },
    {
      id: 6,
      image: "/cardimg.png",
      title: "158k Use",
      subtitle: "Budget Ben sfgsfg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === sliderItems.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? sliderItems.length - 1 : prev - 1));

  // const cardWidth = 380;
  // const cardHeight = 520;

  return (
    <div className="relative w-full max-w-4xl mx-auto min-h-[80vh] mt-12">
      {/* Background overlay */}
      <div className="absolute inset-0 rounded-xl bg-black/25 backdrop-blur-sm pointer-events-none"></div>

      {/* Slider container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {sliderItems.map((item, index) => {
            const offset = index - currentIndex;

            // Hide cards not in view
            if (Math.abs(offset) > 2) return null;

            let opacity = 0.5;
            let scale = 0.85;
            if (offset === 0) {
              opacity = 1;
              scale = 1;
            } else if (Math.abs(offset) === 1) {
              opacity = 0.8;
              scale = 0.95;
            }

            const zIndex = offset === 0 ? 50 : 50 - Math.abs(offset);

            return (
              <div
                key={item.id}
                className={`absolute rounded-xl overflow-hidden cursor-pointer bg-[#9A72FD]
    w-[250px] h-[350px] sm:w-[300px] sm:h-[440px] md:w-[380px] md:h-[520px]`}
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) scale(${scale}) rotateZ(${
                    offset === 0 ? 0 : offset < 0 ? -20 : 20
                  }deg)`,
                  opacity,
                  zIndex,
                  transition: "all 0.5s ease",
                }}
              >
                {/* Top Blur */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/50 to-transparent z-20 backdrop-blur-sm rounded-t-xl" />

                {/* Title */}
                <div className="absolute top-0 left-0 right-0 p-4 text-center z-30">
                  <h3 className="text-3xl font-semibold text-orange-400">
                    {item.title}
                  </h3>
                </div>

                <div className="relative w-full h-full ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-b-xl p-20"
                    priority={index === currentIndex}
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 flex flex-col justify-end items-center p-13 rounded-b-xl z-30"
                    style={{
                      backgroundImage:
                        "linear-gradient(to top, rgba(0,0,0,0.8), transparent), url('/textbg.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <p className="text-xl text-white text-center">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 z-50"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 z-50"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
