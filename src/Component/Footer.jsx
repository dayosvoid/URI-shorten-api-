import React from 'react'
import logo from "../assets/images/logo.svg"
import facebook from "../assets/images/icon-facebook.svg"
import pinterest from "../assets/images/icon-pinterest.svg"
import twitter from "../assets/images/icon-twitter.svg"
import instagram from "../assets/images/icon-instagram.svg"


const Footer = () => {
  return (
    <div className='bg-[hsl(260,8%,14%)] py-15 '>
      <footer className='container mx-auto w-11/12 text-center md:text-start flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8 text-[hsl(257,7%,63%)]'>
        <h2 ><img src={logo} alt="" className='invert'/></h2>

        <div className='flex flex-col md:flex-row md:items-start justify-center gap-10 md:gap-12 md:w-[60%]'>
                    {/* feature */}
            <div className='space-y-4' >
                <h2 className='text-[hsl(0,0%,75%)] font-semibold'>Features</h2>
                <ul className='text-[14px] text-[14px] space-y-1.5'>
                    <li className='hover:text-[hsla(180,66%,67%,1.00)] cursor-pointer'>Link shorten</li>
                    <li className='hover:text-[hsla(180,66%,67%,1.00)] cursor-pointer'>Branded Links</li>
                    <li className='hover:text-[hsla(180,66%,67%,1.00)] cursor-pointer'>Analytics</li>
                </ul>
            </div>
            {/* resources */}
            <div className='space-y-4'>
                <h2 className='text-[hsl(0,0%,75%)] font-semibold'>Resources</h2>
                <ul className='text-[14px] space-y-1.5'>
                    <li className='hover:text-[hsla(180,66%,67%,1.00)] cursor-pointer'>blog</li>
                    <li className='hover:text-[hsla(180,66%,67%,1.00)] cursor-pointer'>Developers</li>
                    <li className='hover:text-[hsla(180,66%,67%,1.00)] cursor-pointer'>Support</li>
                </ul>
            </div>
            {/* company */}
            <div className='space-y-4'>
                <h2 className='text-[hsl(0,0%,75%)] font-semibold'>Company</h2>
                <ul className='text-[14px] text-[14px] space-y-1.5'>
                    <li className='hover:text-[hsla(180,66%,67%,1.00)] cursor-pointer'>About</li>
                    <li className='hover:text-[hsla(180,66%,67%,1.00)] cursor-pointer'>Our Teams</li>
                    <li className='hover:text-[hsla(180,66%,67%,1.00)] cursor-pointer'>Careers</li>
                    <li className='hover:text-[hsla(180,66%,67%,1.00)] cursor-pointer'>Contacts</li>
                </ul>
            </div>
            {/* social */}
            <div className='flex gap-5'>
                <span><img src={facebook} alt="facebook" className='w-[30px] hover:text-[hsla(180,66%,67%,1.00)] cursor-pointer ' /></span>
                <span><img src={twitter} alt="twitter" className='w-[30px] hover:text-[hsla(180,66%,67%,1.00)] cursor-pointer' /></span>
                <span><img src={pinterest} alt="pinterest" className='w-[30px] hover:text-[hsla(180,66%,67%,1.00)] cursor-pointer' /></span>
                <span><img src={instagram} alt="instagram" className='w-[30px] hover:text-[hsla(180,66%,67%,1.00)] cursor-pointer' /></span>
            </div>
        </div>
        
      </footer>
    </div>
  )
}

export default Footer
