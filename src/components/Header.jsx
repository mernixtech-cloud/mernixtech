'use client'
import Image from 'next/image'
import { TbMenu } from "react-icons/tb";
import Btn from './re-useable/Btn'


const Header = () => {
  return (
    <header className='font-header font-bold h-[44px] top-0 w-full bg-[#ffffff] flex justify-center items-center md:sticky z-[100]' >
        <div className='w-[90%] h-[90%] flex justify-between min-[1450px]:w-[1440] items-center'>
            <span className='w-[100px] h-auto flex justify-between items-center'>
                <Image priority alt='mernixtech-agency-logo' src={'/mernixtech-agency-logo.png'} height={17} width={17}/>
                Mernixtech
            </span>
            <div className='w-[47%] font-main font-normal h-[100%] hidden justify-between items-center min-[800px]:flex lg:w-[37%]'>
                <ul className='w-[70%] text-[12px] flex justify-between items-center'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                </ul>
                <Btn height="33px" width="95px" fontSize='12px' back="#007aff" color='#ffffff' borderRadius='5px' text='Contact Us'/>
            </div>
            <TbMenu className='min-[800px]:hidden text-2xl text-[#3A3A3C]'/> 
        </div>
    </header>
  )
}

export default Header
