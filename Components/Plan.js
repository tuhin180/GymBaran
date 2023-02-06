import React from "react";
import Image from "next/image";
import handsup from "../public/Group.png";
import jump from "../public/back.png";
import legup from "../public/man.png";
import { HiArrowSmRight } from "react-icons/hi";
const Plan = () => {
  return (
    <div className=" mt-[60px] md:mt-[120px] w-[326px] h-[412px]  md:w-[1236px] md:h-[274px] rounded-[30px] bg-gradient-to-r from-[#6462F0] to-[#9190E9] flex justify-between items-center flex-col md:flex-row p-6 md:p-[87px] ">
      <div className="w-full md:w-1/3  flex flex-row gap-[30px]   ">
        <div className=" flex justify-center items-center w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-indigo-200 rounded-3xl ">
          <Image src={handsup} alt="man" className="" />
        </div>
        <div className="">
          <h3 className=" text-base w-[132px] md:w-[170px] h-[56px]  md:text-lg  font-poppins text-white tracking-[0.01em] leading-7    ">
            Get that 11 line <br /> in 30 days
          </h3>
          <div className="mt-2 md:mt-4">
            <a className="flex text-gray-400" href="#">
              Learn more
              <span className="mt-[6.5px] ml-4">
                <HiArrowSmRight />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3  flex flex-row gap-[30px]   ">
        <div className=" flex justify-center items-center w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-indigo-200 rounded-3xl ">
          <Image src={handsup} alt="man" className="" />
        </div>
        <div className="">
          <h3 className=" text-base w-[132px] md:w-[206px] h-[56px]  md:text-lg  font-poppins text-white tracking-[0.01em] leading-7">
            14 Days
            <br />
            sherd challenge
          </h3>
          <div className="mt-2 md:mt-4">
            <a className="flex text-gray-400" href="#">
              Learn more
              <span className="mt-[6.5px] ml-4">
                <HiArrowSmRight />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3  flex flex-row gap-[30px]   ">
        <div className=" flex justify-center items-center w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-indigo-200 rounded-3xl ">
          <Image src={handsup} alt="man" className="" />
        </div>
        <div className="">
          <h3 className=" text-base w-[132px] md:w-[140px] h-[56px]  md:text-lg  font-poppins text-white tracking-[0.01em] leading-7">
            Get flat balley <br /> in 30 days
          </h3>
          <div className="mt-2 md:mt-4">
            <a className="flex text-gray-400" href="#">
              Learn more
              <span className="mt-[6.5px] ml-4">
                <HiArrowSmRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
