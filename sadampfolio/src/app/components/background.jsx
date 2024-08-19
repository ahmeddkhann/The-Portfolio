import React from 'react';
import Image from 'next/image';
import image2 from '../images/Group9.png';

const Background = () => {
  return (
    <div className="lg:mt-40 mt-[60px]">
      <div className="text-center">
        <h3 className="lg:text-md md:text-lg text-xs font-semibold ">
          I’ve worked with some of the biggest names in the tech industry, <br /> 
          and startups that will soon takeoff.
        </h3>
      </div>
      <div className="flex justify-center mt-8 lg:ml-[35%] md:ml-[30%] ml-5 lg:w-[350px] w-[250px]">
        <Image
          src={image2}
          alt='Group 9'
        />
      </div>
    </div>
  );
}

export default Background;
