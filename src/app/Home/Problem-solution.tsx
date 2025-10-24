"use client"

import Btn from "../../components/Btn"

const ProblemSolution = () => {
  return (
    <section className="bg-[whitesmoke] md:mt-5 w-full lg:pt-5 lg:pb-5 flex items-center justify-center font-main">
      <div className="h-auto grid min-[1450px]:w-[1440px] md:h-[690px] w-[90%] grid-rows-5 md:grid-cols-4 md:grid-rows-8 md:gap-3 gap-2">
        <div className="col-span-3 order-1 md:col-span-2 md:row-span-2 flex justify-center items-start flex-col">
          <h2 className="font-bold text-2xl font-header md:h-full w-full flex justify-start items-start">About Us</h2>
          <p className="font-[16px] m-0">Turning skilled contractors into the first choice for homeowners.</p>
            <h2 className="font-bold text-[20px] m-0 font-header">We Know Your Pain</h2>
            <p className="font-[16px] m-0">Good remodelers don’t lose jobs for bad work. They lose them because they’re invisible online.</p>
        </div>
        <div className="order-3 md:order-2 h-auto col-span-4 md:col-span-2 md:row-span-2 flex md:justify-start justify-center items-start flex-col">
          <h2 className="font-bold text-[20px] font-header">🔧We Know Your Solution </h2>
          <p className="font-[16px] m-0">We use strong branding, local SEO, and smart design to help homeowners find you, trust you, and hire you first.</p>
        </div>
        <div className="h-[250px] order-2 col-span-3 md:col-span-2 md:row-span-6 flex justify-center items-end box1">
        </div>
        <div className="col-span-3 order-4 md:col-span-2 md:row-span-3 flex justify-center items-end box2">
          4
        </div>
        <div className="col-span-3 order-5 md:col-span-2 md:row-span-3 flex justify-center  items-start flex-col">
          <h2  className="font-bold text-[20px] font-header">Who We Help</h2>
          <p className="font-[16px]">We help contractors grow kitchen, bath, basement, garage, and home additions.</p>
          <Btn text="Why contractors choose us" back="#007aff" height="44px" width="189px" fontSize="14px" borderRadius="50px" color="#ffff" className="shadow-lg md:w-[250px] lg:text-[18px]"/>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution