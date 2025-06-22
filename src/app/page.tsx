"use client";
import * as React from "react";
import { CreateTemplateCard } from "./components/dashboard/CreateTemplateCard";
import { TopUsersCard } from "./components/dashboard/TopUsersCard";
import { GenerateToggleCard } from "./components/dashboard/GenerateToggleCard";
import { PromptServiceCard } from "./components/dashboard/PromptServiceCard";
import TemplateAiCard from "./components/dashboard/TemplateAiCard";
import ToggleCard from "./components/dashboard/ToggleCard";
import PromptsStatsCard from "./components/dashboard/PromptsStatsCard";
import Roadmap from "./components/roadmap/roadmap";
import Slider from "./components/slider/slider";
import Carousel from "./components/carousel/carousel";

export function TemplateExample() {
  return (
    <main className="p-8 bg-slate-950 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:">
        <section className="w-[76%] max-md:ml-0 max-md:w-full">
          <div className="grow max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:">
              <div className="w-[31%] max-md:ml-0 max-md:w-full">
                <div className="grow">
                  <CreateTemplateCard />
                  <TopUsersCard />
                  <GenerateToggleCard />
                </div>
              </div>
              <div className="ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                <TemplateAiCard />
              </div>
            </div>
          </div>
        </section>
        <aside className="ml-5 w-[24%] max-md:ml-0 max-md:w-full">
          <div className="grow max-md:mt-10">
            <ToggleCard />
            <PromptsStatsCard />
            <PromptServiceCard backgroundImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/65fb66fa38d3141316373a66245fb92e5308e3da?placeholderIfAbsent=true&apiKey=54cac0f2c0fe47caaa9a283545921229" />
          </div>
        </aside>
      </div>
      <section>
        <div className="ml-5 w-full">
          <Roadmap />
        </div>
      </section>

      <section>
        <div className="ml-5 w-full">
          <Slider />
        </div>
      </section>

      <section>
        <div className="ml-5 w-full">
          <Carousel />
        </div>
      </section>
    </main>
  );
}

export default TemplateExample;
