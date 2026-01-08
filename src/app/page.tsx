"use client";

import CTASection from "./Home/CTASection";
import Hero from "./Home/Hero";
import ServicesSection from "./Home/ServicesSection";
import StatsSection from "./Home/StatsSection";
import Testimonials from "./Home/Testimonials";
import WhyChooseUs from "./Home/WhyChooseUs";


export default function Home() {
  return (
    <main>
      <Hero/>
      <StatsSection/>
      <ServicesSection/>
      <WhyChooseUs/>
      <Testimonials/>
      <CTASection/>
    </main>
  );
}
