import React from 'react'
import Image from 'next/image';
import Image1 from "../images/Rectangle6.png";
const Money = () => {
  return (
  <div>
      <div className='lg:flex md:flex lg:mt-40 mt-20'>
      <div className='lg:flex md:flex md:ml-[120px] lg:ml-[220px] md:w-[260px]
                      ml-14 lg:w-[350px] w-[200px]'>
      <Image
      src={Image1}
      />
      </div>
      <div className='lg:ml-20 text-[11px] ml-4 md:ml-10 lg:w-[350px] mt-10 lg:mt-20'>
        <h1 className='lg:text-xl md:text-[18px] text-md font-semibold '>
            My design increased eBay annual revenue by $17M.
            </h1>
        <p className='text-gray-500 md:text-[15px]'>← Here's how.</p>
        <p className='text-gray-500 md:text-[15px]'>Video not loading? View on Youtube</p>
      </div>
    </div>

    <div className='lg:mt-40 mt-20 text-center   '>
        <h1 className='lg:text-xl md:text-xl text-md font-semibold'>And there's more to my story.</h1>
        <p className='text-gray-500 md:text-md text-sm'>
        As of now, my design videos have</p>
        <p className='text-gray-500 md:text-md text-sm'>
        reached 2,709,349 viewers on YouTube.
        </p>
    </div>
  </div>
  )
}

export default Money
