"use client";
import Image from "next/image";
import * as React from "react";

interface PromptsStatsCardProps {
  backgroundImageUrl: string;
  count: string;
  label: string;
  decorativeLeftUrl: string;
  decorativeRightUrl: string;
  decorativeBottomUrl: string;
}

export function PromptsStatsCard({
  backgroundImageUrl,
  count,
  label,
  decorativeLeftUrl,
  decorativeRightUrl,
  decorativeBottomUrl,
}: PromptsStatsCardProps) {
  return (
    <article className="flex overflow-hidden relative flex-col justify-center items-center px-8 py-12 mt-7 w-full text-center aspect-[1.242] min-h-[211px] max-md:px-5">
      <Image
        src={backgroundImageUrl}
        className="object-cover absolute inset-0 size-full"
        alt=""
        width={0}
        height={0}
      />
      <div className="relative z-0 text-6xl font-semibold tracking-tighter leading-none max-md:text-4xl">
        {count}
      </div>
      <div className="flex relative z-0 mt-6 max-w-full text-lg leading-loose text-indigo-300 w-[196px]">
        <Image
          src={decorativeLeftUrl}
          className="object-contain shrink-0 w-2.5 aspect-[0.25]"
          alt=""
          width={0}
          height={0}
        />
        <div className="px-5 py-3.5 max-md:px-5 max-md:mr-0">{label}</div>
        <Image
          src={decorativeRightUrl}
          className="object-contain z-10 shrink-0 w-2.5 aspect-[0.25] max-md:-mr-0.5"
          alt=""
          width={0}
          height={0}
        />
      </div>
      <Image
        src={decorativeBottomUrl}
        className="object-contain absolute right-0 bottom-0 z-0 self-start max-w-full aspect-[1.24] h-[211px] w-[262px]"
        alt=""
        width={0}
        height={0}
      />
    </article>
  );
}
