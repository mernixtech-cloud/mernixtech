'use client'

import { LuChartNoAxesCombined } from "react-icons/lu";
import { FaHandsHoldingCircle } from "react-icons/fa6";

import Btn from "../../components/Btn"

const HeroSection = () => {
  return (
    <section className='w-full pt-4 pb-4 flex justify-center items-center overflow-hidden font-main lg:pt-5 lg:pb-5'>
        <div className="w-[90%] min-[1450px]:w-[1440px] flex justify-between items-center flex-wrap ">
            <div className='mt-4 md:w-[50%]'>
               <div> 
                  <h3 className="text-[16px] lg:text-[18px]">⭐⭐⭐⭐⭐ Trusted by remodeling pros nationwide</h3>
                  <h1 className="font-bold font-header text-[32px] lg:text-5xl">Remodelers Lose Jobs When They’re Invisible Online.</h1>
                  <h2 className="text-[16px] md:text-[17px] lg:text-[18px] lg:w-[80%]">Get 20+ new leads monthly with a simple SEO + website system built for remodelers.</h2>
                  <div className='text-[16px] flex'>
                    <p className='flex items-center justify-between mr-3.5 h-6  md:text-[18px] lg:text-[18px]'><LuChartNoAxesCombined  className="text-[#eeb644] text-[18px] font-black mr-1 lg:text-[18px]"/> More Traffic</p>
                    <p className='flex items-center justify-between  h-6  md:text-[18px] lg:text-[18px]'><FaHandsHoldingCircle  className="text-[#eeb644] text-[18px] font-black mr-1 lg:text-[18px]"/>Better Lead Quality</p>
                  </div>
                </div>
                <div className="mt-3 mb-1 md:m-0 md:flex">
                  <Btn text="Get a Free Site & SEO Audit" back="#007aff" height="44px" width="189px" fontSize="13px" borderRadius="50px" color="#ffff" className="shadow-lg md:w-[250px] lg:text-[18px] cursor-pointer outline-0"/>
                  <Btn text="Download Free Guide" height="44px" width="189px" fontSize="13px" borderRadius="50px" color="#333333" className="hidden ml-2 md:block md:w-[250px] lg:text-[18px] shadow-inner border-[#51B0D7] border-2 cursor-pointer "/>
                </div>
            </div>
            {/* <div className=''>
                <div className=''>
                    <Image src={'/guarantee-seal.png'} alt="" layout="fill" objectFit="contain"/>
                </div>
            </div> */}
          <div className=" relative hidden md:flex md:h-[500px] w-[50%] lg:h-[550px] justify-center items-center">
            <img
              className="object-cover rounded-br-4xl rounded-r-4xl h-full w-full"
              src="/Flux_Dev_A_happy_kitchen_and_bathroom_remodeling_contractor_wi_2.jpg"
              alt="Contractor making a call"
            />
            <div className="hdcgudh absolute h-full w-full"></div>
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