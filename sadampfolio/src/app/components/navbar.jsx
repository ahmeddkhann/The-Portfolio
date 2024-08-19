import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex w-full lg:mt-9 mt-2 border-b-2 border-gray-200">
      <div 
        id='company-name' 
        className="w-1/2 md:ml-[8%] flex lg:ml-[10%] ml-2 font-bold lg:text-2xl md:text-2xl text-xl items-center mb-2"
      >
        <span>xelpixel</span>
      </div>
      <div className="w-1/2 flex gap-1 mt-2 lg:gap-20 md:gap-10 items text-xs md:text-[16px] lg:text-[16px] text-center lg:mb-2 lg:mt-2">
        <a 
          href="https://www.linkedin.com/in/your-profile" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
        <a 
          href="https://www.instagram.com/your-profile" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Instagram
        </a>
        <a 
          href="https://www.youtube.com/@maticsmentor/featured" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Youtube
        </a>
      </div>
    </div>
  )
}

export default Navbar
