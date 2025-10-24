"use client";

import HeroSection from "@/app/Home/HeroSection";
import Portfolio from "@/app/Home/Portfolio";
import ProblemSolution from "@/app/Home/Problem-solution";

export default function Home() {
  return (
    <main className=" h-full w-full flex justify-center flex-col items-center">
      {/* <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"> */}
        <HeroSection/>
        <Portfolio/>
        {/* <ProblemSolution/> */}
      {/* </main> */}
    </main>
  );
}
