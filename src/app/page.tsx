"use client";

import HeroSection from "@/components/Home/HeroSection";
import ProblemSolution from "@/components/Home/Problem-solution";

export default function Home() {
  return (
    <main className=" h-full w-full flex justify-center flex-col items-center">
      {/* <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"> */}
        <HeroSection/>
        <ProblemSolution/>
      {/* </main> */}
    </main>
  );
}
