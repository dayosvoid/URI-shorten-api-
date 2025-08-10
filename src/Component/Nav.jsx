import React, { useState } from 'react'
import logo from "../assets/images/logo.svg"
import { Menu, X } from 'lucide-react'

const Nav = () => {
    // state to manage the dropdown Menu
    const [menu,setMenu]=useState(false)
    console.log(menu);
    
  return (
    <div className='container mx-auto w-11/12 relative'>
        <nav className='flex justify-between py-4'>
            {/* logo (left section) */}
            <div className='flex items-center gap-5'>
                <span ><img src={logo} alt="logo" className='cursor-not-allowed'/></span>

                <ul className='hidden md:flex space-x-4 flex font-semibold text-gray-400 items-center' >
                    <li className='hover:text-black cursor-not-allowed'>Features</li>
                    <li className='hover:text-black cursor-not-allowed'>Pricing</li>
                    <li className='hover:text-black cursor-not-allowed'>Resources</li>
                </ul>
            </div>

            {/* menu (right section)(login/ sign up) */}
            <div className='flex items-center'>
                <button className='text-gray-700  md:hidden' onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu />}</button>
                
                {/*(login/ sign up)  */}
                <div className='space-x-3 font-semibold hidden  md:flex'>
                    <button  disabled={true} className='text-gray-400 hover:text-black  cursor-not-allowed '>Login</button>
                    <button  disabled={true} className='bg-[hsl(180,66%,49%)] hover:bg-[hsla(180,66%,67%,1.00)] cursor-not-allowed py-1 px-4 rounded-full text-white font-semibold'>Sign Up</button>
                </div>
            </div>


        </nav>
        {
            menu && 
            <div className='flex flex-col gap-8 text-white bg-[hsl(257,27%,26%)] text-semibold text-center w-full py-10 px-5 absolute rounded-md md:hidden z-2'>
                <ul className='space-y-4' >
                    <li className='cursor-not-allowed'>Features</li>
                    <li className='cursor-not-allowed'>Pricing</li>
                    <li className='cursor-not-allowed'>Resources</li>
                </ul>
               {/* the thin horizontal line  in the dropdown menu  */}
               <div className='w-full border border-gray-600 '></div>
               <div className='flex flex-col gap-4 '>
                <button disabled className='text-gray-400 hover:text-black cursor-pointer cursor-not-allowed' >Login</button>
                <button  disabled={true} className='bg-[hsl(180,66%,49%)] py-2 rounded-full cursor-not-allowed'>Sign up</button>
               </div>
            </div>
        }
    </div>
  )
}

export default Nav
