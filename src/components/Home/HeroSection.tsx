'use client'

import { LuChartNoAxesCombined } from "react-icons/lu";
import { FaHandsHoldingCircle } from "react-icons/fa6";

import Btn from "../re-useable/Btn"

const HeroSection = () => {
  return (
    <section className='w-full pt-2 pb-2 h-auto flex justify-center items-center overflow-hidden font-main'>
        <div className="w-[90%] min-[1450px]:w-[1440] flex justify-between items-center flex-wrap ">
            <div className='mt-4 md:w-[50%]'>
               <div> 
                  <h3 className="text-[14px] ">⭐⭐⭐⭐⭐ Trusted by top remodeling contractors nationwide</h3>
                  <h1 className="font-bold text-3xl mt-2 mb-2 font-header">Great Remodelers Deserve Better Leads</h1>
                  <h2 className="text-[14px] ">We help kitchen and bathroom remodeling contractors grow their business using targeted, results-driven digital marketing strategies that attract quality clients.</h2>
                  <div className='text-[14px] flex mt-2 mb-2'>
                    <p className='flex items-center justify-between mr-5 h-6'><LuChartNoAxesCombined  className="text-[#eeb644] text-2xl font-black mr-1"/> More Traffic</p>
                    <p className='flex items-center justify-between  h-6'><FaHandsHoldingCircle  className="text-[#eeb644] text-2xl font-black mr-1"/>Better Lead Quality</p>
                  </div>
                </div>
                <div className="mt-3 mb-1">
                  <Btn text="Book A Free Strategy Call" back="#007aff" height="44px" width="180px" fontSize="14px" borderRadius="50px" color="#ffff" className="md:w-[200px]"/>
                </div>
            </div>
            {/* <div className=''>
                <div className=''>
                    <Image src={'/guarantee-seal.png'} alt="" layout="fill" objectFit="contain"/>
                </div>
            </div> */}
          <div className="hdcgudh hidden md:flex h-[85vh] w-[50%] bg-amber-200 justify-center items-center">
            <img
              className="object-contain"
              src="/Flux_Dev_A_happy_kitchen_and_bathroom_remodeling_contractor_wi_2.jpg"
              alt="Contractor making a call"
            />
          </div>
          <div className="h-[180px] w-full mt-3 relative min-[375px]:h-[200px] md:hidden">
            <img
              className="object-fill absolute -top-20 -right-20 "
              src="/Flux_Dev_A_happy_kitchen_and_bathroom_remodeling_contractor_wi_3.png"
              alt="Contractor making a call"
            />
          </div>
        </div>
    </section>
  )
}

export default HeroSection