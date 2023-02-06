import React from "react";
import Image from "next/image";
import body from "../public/Group 3892.png";
import { HiArrowRight } from "react-icons/hi";
const FullBody = () => {
  return (
    <div className="mt-[120px] flex  md:flex-row flex-col-reverse gap-5 md:gap-10 ">
      <div className="w-full md:w-1/2 mr-6 mt-3 md:mt-0">
        <Image src={body} alt="body" className=" " />
      </div>
      <div className="mt-10 md:mt-20  w-full md:w-1/2 ">
        <h1 className="text-[28px] md:text-[46px] font-sportingG ">
          Best full body <br /> workout to lose fat
        </h1>
        <p className="mt-7 font-poppins text-xs md:text-base">
          Exercise is a very important need for our body. Health and fitness
          will be obtained if you can do regular exercise and run a healthy
          routine. Even at home we still have to be diligent in exercising,
          either alone or with your friends at home.
        </p>
        <button className=" flex justify-between items-center px-4 font-poppins bg-[#264373]  text-white rounded-[10px] mt-[40px] md:mt-[50px] w-[176px] h-[40px] md:w-[246px] md:h-[52px]">
          Get started
          <HiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default FullBody;
