import React from "react";
import Image from "next/image";
import arrow from "../public/Vector.png";
import play from "../public/play.png";
import heroImg from "../public/hero.png";
import partner from "../public/partner.png";
const HeroSection = () => {
  return (
    <div className="mt-20  grid  justify-between grid-cols-1 md:grid-cols-2 p-2 md:p-0">
      <div className="">
        <h1 className="font-sportingG font-[700] text-[28px] md:text-[56px] md:leading-[73px] ">
          Healthy in side <br /> <span className="text-[#8382EB]">fresh</span>{" "}
          out side
        </h1>
        <p className="tracking-widest leading-7 text-justify w-[288px] md:w-[492px] text-xs md:text-base mt-5 font-poppins ">
          Exercise is a veary important need for our body. Health and fitness
          will be obtained if you can do regular exercises and run a healthy
          routine .
        </p>
        <div className="flex mt-[22px] gap-2  md:gap-[35px]">
          <button
            className="flex justify-between text-xs  md:text-base font-poppins text-white px-[17px] py-[14px] md:px-6 md:py-4 bg-[#264373] rounded-xl w-[176px] h-[40px] md:h-[56px] md:w-[246px] focus:outline-none focus:ring focus:ring-violet-300 shadow-lg"
            type="button "
          >
            Get started
            <Image
              src={arrow}
              alt="arrow"
              // width="20"
              // height="20"
              className=" w-4 md:w-5 md:h-5 "
            />
          </button>
          <button className=" w-[125px] md:w-[174px] h-[40px] md:h-[56px] bg-white flex justify-between text-xs md:text-base font-poppins rounded-xl px-[17px] py-[14px] md:px-6 md:py-4 text-[#264373] focus:outline-none focus:ring focus:ring-violet-300 shadow-lg">
            <Image
              src={play}
              alt="play"
              // width="20"
              // height="20"
              className=" w-4 md:w-5 md:h-5 "
            />
            Learn more
          </button>
        </div>
        <p className="text-base font-poppins mt-8">Brands:</p>
        <Image src={partner} alt="parter" width="462.38" height="63.94"></Image>
      </div>
      <div className="mt-10 md:mt-0">
        <Image src={heroImg} alt="hero" width="584" height="98.94" />
      </div>
    </div>
  );
};

export default HeroSection;
