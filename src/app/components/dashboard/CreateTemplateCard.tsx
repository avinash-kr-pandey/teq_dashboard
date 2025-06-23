"use client";
import * as React from "react";

export function CreateTemplateCard() {
  return (
    <article className="flex flex-col justify-between p-8 w-full aspect-[0.662] min-h-[396px] max-md:px-5 rounded-2xl bg-gradient-to-b from-[#1a172e] to-[#0f0d21] text-white shadow-lg">
      <header className="text-4xl font-semibold tracking-tight leading-[44px] max-md:text-center">
        Create
        your own <br />
        <span className="text-violet-300">template</span>
      </header>

      <div className="mt-40 max-md:mt-10 max-md:text-center">
        <div className="text-lg font-bold text-indigo-100 leading-loose">
          14 days trial
        </div>
        <div className="text-base text-violet-400">after – $5/month</div>
      </div>
    </article>
  );
}
