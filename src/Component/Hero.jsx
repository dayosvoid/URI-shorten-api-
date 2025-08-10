import React from 'react'
import Heroimg from "../assets/images/illustration-working.svg"

const Hero = () => {
  return (
    <div className='pb-8 md:flex flex-row-reverse justify-center relative md:mt-4 md:mb-35'>
         {/* hero section */}
            {/* image */}
            <div className='w-[100%] pl-5.5 overflow-hidden md:hidden'><img src={Heroimg} alt="image" className='min-w-[500px]'/></div>
            <div className='w-[50%] overflow-hidden hidden md:flex absolute left-[50%]'><img src={Heroimg} alt="image" className='max-w-[600px]'/></div>
        
        {/* hero-section text */}
        <div className='container mx-auto w-11/12 flex md:items-center'>
            <div className=' flex flex-col gap-5 text-center items-center py-4 md:text-start md:w-[50%]'>
                    <h2 className='font-bold text-[30px] sm:text-[40px] md:text-[45px] text-gray-900 md:self-start'> More than just <br/> shorter links</h2>
                <p className='text-gray-500 md:text-balance md:self-start md:w-[90%] text-[18px]'>Build your brand’s recognition and get detailed insights 
                    on how your links are performing.
                </p>
                
                <button className='bg-[hsl(180,66%,49%)] py-2 px-10 rounded-full text-[20px] hover:text-[20.5px] text-white font-semibold md:self-start hover:bg-[hsla(180,66%,67%,1.00)]  cursor-not-allowed'>
                    Get Started
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero
