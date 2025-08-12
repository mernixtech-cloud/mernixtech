'use client'

import Image from "next/image"
import Btn from "../re-useable/Btn"

const HeroSection = () => {
  return (
    <section className='w-full h-[100vh] min-[1450px]:w-[1440px] min-[1450px]:h-[595px] min-[768px]:h-[95vh] min-[1024px]:h-[100vh] bg-grey flex justify-center items-center flex-col relative font-main'>
        <svg className="shape"></svg>
        <div className="w-[90%] h-[98%] flex justify-center items-center absolute">
            <div className='w-[100%] h-full  pt-3 pb-3  md:w-[50%] flex items-center justify-around flex-col text-center md:text-left min-[1362px]:h-[80%] min-[1440px]:h-[85%] min-[1362px]:items-start'>
               <div> 
                  <h3>🎯 Let’s turn your website into your lead source.</h3>
                  <h1 className="text-3xl font-semibold mt-2 mb-2 font-header min-[375px]:text-4xl min-[1024px]:text-[40px]">We Turn Remodelers’ Websites Into Lead Generating Machines</h1>
                  <h2 className="text-[16px] md:text-justify">From kitchen and bathroom remodels to luxury home renovations and basement finishing, we help contractors showcase their best work, rank higher in searches, and attract more clients.</h2></div>
                {/* <div className="w-full h-auto flex">
                  <div className="w-[100px] h-[100px] relative">
                    <Image src={'/google-review-5.0.png'} alt="" layout="fill" objectFit="contain"/>
                  </div>
                  <div className="w-[100px] h-[100px] relative">
                    <Image src={'/facebook-review-5.0.png'} alt="" layout="fill" objectFit="contain"/>
                  </div>
                </div> */}
                <div className="w-full h-auto flex justify-between items-center min-[1362px]:w-[80%]">
                  <Btn text="Book A Free Strategy Call" back="#007aff" height="55px" width="250px" fontSize="16px" borderRadius="50px" color="#ffff" className="md:w-[200px]"/>
                  <Btn text="Explore Our Project >>" back="#007aff" height="55px" width="200px" fontSize="16px" borderRadius="50px" color="#ffff" className="md:w-[200px] hidden min-[1024px]:block"/>
                </div>
            </div>
            <div className='w-[100px] h-[100px] absolute bottom-16 right-0 md:left-[45%] lg:left-[50%] lg:h-[150px] lg:w-[150px] z-10'>
                <div className='w-full h-full relative'>
                    <Image src={'/guarantee-seal.png'} alt="" layout="fill" objectFit="contain"/>
                </div>
            </div>
          <div className="w-1/2 h-full hidden md:block relative z-0">
            <Image
              src="/Contractor-making-call.png"
              alt="Contractor making a call"
              fill
              className="object-contain scale-x-[-1]"
              sizes="(max-width: 768px) 90vh, 50vw"
            />
          </div>
        </div>
    </section>
  )
}

export default HeroSection