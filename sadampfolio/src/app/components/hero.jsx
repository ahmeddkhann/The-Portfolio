import React from "react";
import Image from "next/image";
import Image1 from "../images/Maskgroup.png";

const Hero = () => {
  return (
    <div className="lg:mt-[70px] mt-[40px] lg:flex md:flex ">
      <div className="lg:ml-[180px] md:ml-10 lg:w-[350px] md:w-[350px] ml-6 w-[250px]">
        <Image src={Image1} alt="Mask Group" />
      </div>
      <div className="lg:mt-[100px] mt-[40px] lg:ml-20 ml-10 lg:w-[325px]">
        <div>
          <h1 className="font-bold">
            Product designer, YouTuber, currently producing a Figma Course for
            aspiring UX designers.
          </h1>
          <p className="mt-[30px] text-[12px]">
            ↓ Join my email list to learn more about product design
          </p>
        </div>
        <div className="mt-5">
          <input
            type="email"
            placeholder="xyz@gmail.com"
            className="py-2 px-3 border border-black text-white text-sm bg-gray-200 placeholder-black black-200"
          />

          <button className="lg:ml-2 bg-black mt-[4px] py-[6px] px-3 text-white">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
