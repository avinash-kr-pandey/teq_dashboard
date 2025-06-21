"use client";
import Image from "next/image";
import * as React from "react";

interface ToggleCardProps {
  backgroundImageUrl: string;
  activeToggleUrl: string;
  inactiveToggleUrl: string;
  iconUrl: string;
}

export function ToggleCard({
  backgroundImageUrl,
  activeToggleUrl,
  inactiveToggleUrl,
  iconUrl,
}: ToggleCardProps) {
  return (
    <article className="flex overflow-hidden relative flex-col justify-center items-center w-full aspect-[1.669] min-h-[157px]">
      <Image
        src={backgroundImageUrl}
        className="object-cover absolute inset-0 size-full"
        alt=""
        width={0}
        height={0}
      />
      <div className="flex overflow-hidden relative gap-1 items-center p-2 border border-solid bg-black bg-opacity-10 border-slate-600 border-opacity-50 rounded-[11802px]">
        <button className="flex relative flex-col gap-3.5 justify-center items-center self-stretch px-3.5 py-4 my-auto w-14 shadow-lg aspect-square min-h-14 rounded-[11803px]">
          <Image
            src={activeToggleUrl}
            className="object-cover absolute inset-0 size-full"
            alt=""
            width={0}
            height={0}
          />
          <Image
            src={iconUrl}
            className="object-contain self-stretch my-auto w-6 aspect-square"
            alt=""
            width={0}
            height={0}
          />
        </button>
        <Image
          src={inactiveToggleUrl}
          className="object-contain shrink-0 gap-3.5 self-stretch my-auto w-14 aspect-square min-h-14 rounded-[11803px] shadow-[14px_0px_10px_rgba(0,0,0,0.25)]"
          alt=""
          width={0}
          height={0}
        />
      </div>
    </article>
  );
}
