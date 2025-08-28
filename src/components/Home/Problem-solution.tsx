"use client"

import Btn from "../re-useable/Btn"

const ProblemSolution = () => {
  return (
    <section className="bg-[whitesmoke] w-full pt-4 pb-4 lg:pt-5 lg:pb-5 flex items-center justify-center font-main">
      <div className="h-auto grid min-[1450px]:w-[1440px] md:h-[600px] lg:h-[550px] w-[90%] grid-cols-3 grid-rows-5 md:grid-cols-4 md:grid-rows-8 md:gap-3 gap-2">
        <div className="col-span-3 order-1 md:col-span-2 md:row-span-1 flex justify-center items-start flex-col">
          <h2 className="font-bold text-2xl font-header md:h-full w-full flex justify-start items-start">About Us</h2>
        </div>
        <div className="order-4 md:order-2 h-auto col-span-4 md:col-span-2 md:row-span-2 flex md:justify-start justify-center items-start flex-col">
          <h2 className="font-bold text-[20px] font-header">🔧We Know Your Solution </h2>
          <p className="font-[16px] m-0">We combine contractor branding, local SEO, and lead-focused design to make sure homeowners discover, trust, and choose you first.</p>
        </div>
        <div className="h-[250px] order-2 col-span-3 md:col-span-2 md:row-span-7 flex justify-center items-end box1">
          <div className="w-full pt-2 pb-8 pl-3 pr-3 bg-[#000000] opacity-75 text-[#f0f0f5]">
            <h2 className="font-bold text-[20px] font-header">We Know Your Pain</h2>
            <p className="font-[16px]">Too many skilled remodelers lose jobs not because of their work, but because homeowners can’t find them online.</p>
          </div>
        </div>
        <div className="col-span-3 order-3 md:col-span-2 md:row-span-3 flex justify-center items-end box2">
          4
        </div>
        <div className="col-span-3 order-5 md:col-span-2 md:row-span-3 flex justify-center  items-start flex-col">
          <h2  className="font-bold text-[20px] font-header">Who We Help</h2>
          <p className="font-[16px]">We partner with contractors ready to grow kitchen & bath remodelers, home renovators, basement & garage specialists, and addition experts.</p>
          <Btn text="Learn More" back="#007aff" height="44px" width="189px" fontSize="14px" borderRadius="50px" color="#ffff" className="shadow-lg md:w-[250px] lg:text-[18px]"/>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution