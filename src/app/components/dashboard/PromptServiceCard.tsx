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
     
    </article>
  );
}
