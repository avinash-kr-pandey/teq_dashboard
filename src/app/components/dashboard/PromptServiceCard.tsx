"use client";
import Image from "next/image";
import * as React from "react";

interface PromptServiceCardProps {
  backgroundImageUrl: string;
  title: string;
  description: string;
  illustrationUrl: string;
}

export function PromptServiceCard({
  backgroundImageUrl,
  title,
  description,
  illustrationUrl,
}: PromptServiceCardProps) {
  return (
    <article className="flex overflow-hidden relative flex-col justify-between px-7 py-7 mt-7 w-full aspect-[0.636] min-h-[412px] max-md:px-5">
      <Image
        src={backgroundImageUrl}
        className="object-cover absolute inset-0 size-full"
        alt=""
        width={200}
        height={200}
      />
      <div className="relative w-full">
        <h3 className="text-lg font-bold leading-loose text-indigo-100">
          {title}
        </h3>
        <p className="mt-1 text-base leading-6 text-violet-400">
          {description}
        </p>
      </div>
      <Image
        src={illustrationUrl}
        className="object-contain self-center mt-5 max-w-full aspect-[0.79] w-[206px]"
        alt="Service illustration"
        width={200}
        height={200}
      />
    </article>
  );
}
