import React from "react";
import Image from "next/image";
import Image1 from "../images/Rectangle7.png";
const Content = () => {
  return (
    <div>
      <div className="lg:flex md:flex lg:mt-40 mt-20">
        <div className="lg:flex md:flex md:ml-[120px] lg:ml-[220px] md:w-[300px]
                      ml-14 lg:w-[350px] w-[200px]">
          <Image src={Image1} />
        </div>
        <div className="lg:ml-20 text-[11px] ml-4 md:ml-10 lg:w-[350px] mt-10 lg:mt-20">
          <h1 className="lg:text-xl md:text-[12px] text-md font-semibold">
            You tune into my content because I offer genuine industry insights,
            I simplify complex ideas, and my vibe is uplifting
          </h1>
          <p className="text-gray-500">← I also made my xyz proud 🥹.</p>
          <p className="text-gray-500">He is my reason to design.</p>
        </div>
      </div>

      <div className="lg:mt-40 mt-20 text-center">
        <h1 className="lg:text-xl md:text-[10px] text-md md:text-md  font-semibold">
          If you're a business owner aiming to elevate your product <br />
          design, look no further 👀
        </h1>
        <p className="text-gray-500 lg:text-md md:text-md  text-xs mt-5">
          With my network of millions in design, we've got you covered.
        </p>
        <p className="text-gray-500 md:text-md  text-sm">
          Contact my team at aliena.connect@gmail.com
        </p>
      </div>

      <div className="text-center lg:text-md md:text-md  text-xs text-gray-500 mt-10 lg:mt-[120px] mb-10">
        <p>© Saddam.</p>
        <p>Designed with Figma and built on Framer.</p>
      </div>
    </div>
  );
};

export default Content;
