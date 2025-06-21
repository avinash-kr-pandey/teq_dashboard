"use client";
import * as React from "react";
import { CreateTemplateCard } from "./components/dashboard/CreateTemplateCard";
import { TopUsersCard } from "./components/dashboard/TopUsersCard";
import { GenerateToggleCard } from "./components/dashboard/GenerateToggleCard";
import { ToggleCard } from "./components/dashboard/ToggleCard";
import { PromptsStatsCard } from "./components/dashboard/PromptsStatsCard";
import { PromptServiceCard } from "./components/dashboard/PromptServiceCard";
import TemplateAiCard from "./components/dashboard/TemplateAiCard";



export function TemplateExample() {
  return (
    <main className="p-8 bg-slate-950 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:">
        <section className="w-[76%] max-md:ml-0 max-md:w-full">
          <div className="grow max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:">
              <div className="w-[31%] max-md:ml-0 max-md:w-full">
                <div className="grow">
                  <CreateTemplateCard/>
                  <TopUsersCard />
                  <GenerateToggleCard
                   
                  />
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
            <ToggleCard
              backgroundImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/c18778b1932585244cf448df3a876caf3b8041f9?placeholderIfAbsent=true&apiKey=54cac0f2c0fe47caaa9a283545921229"
              activeToggleUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/f70d5610ddfdaaa4c4dd5a3f2268b2f4c85a28d4?placeholderIfAbsent=true&apiKey=54cac0f2c0fe47caaa9a283545921229"
              inactiveToggleUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/0a888bbf01f3870413a3a19e94268ac084eee509?placeholderIfAbsent=true&apiKey=54cac0f2c0fe47caaa9a283545921229"
              iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/4c0d0ad554c82e1257cf8968c091737d4d34537b?placeholderIfAbsent=true&apiKey=54cac0f2c0fe47caaa9a283545921229"
            />
            <PromptsStatsCard
              backgroundImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a8b042f6caa25b085ff7c04744c427ab7394d2ae?placeholderIfAbsent=true&apiKey=54cac0f2c0fe47caaa9a283545921229"
              count="25M"
              label="created prompts"
              decorativeLeftUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/e94450736f4851d492ef49018f0324e10cdc2172?placeholderIfAbsent=true&apiKey=54cac0f2c0fe47caaa9a283545921229"
              decorativeRightUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/e94450736f4851d492ef49018f0324e10cdc2172?placeholderIfAbsent=true&apiKey=54cac0f2c0fe47caaa9a283545921229"
              decorativeBottomUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/0f3516dfa0d5bf8658e4e3e3b4bde9cb6d310f51?placeholderIfAbsent=true&apiKey=54cac0f2c0fe47caaa9a283545921229"
            />
            <PromptServiceCard
              backgroundImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/65fb66fa38d3141316373a66245fb92e5308e3da?placeholderIfAbsent=true&apiKey=54cac0f2c0fe47caaa9a283545921229"
              title="Prompt Service"
              description="Use pre-made templates to jumpstart creativity."
              illustrationUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d05d4d0f8e76b469c077f3d5545a44f2d7783b2b?placeholderIfAbsent=true&apiKey=54cac0f2c0fe47caaa9a283545921229"
            />
          </div>
        </aside>
      </div>
    </main>
  );
}

export default TemplateExample;
