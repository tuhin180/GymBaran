import React from "react";

const Healthy = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-4 mt-4 gap-3 md:gap-0">
      <div className="">
        <h1 className="  md:w-[558px] md:h-[146px] text-[28px] md:text-[46px] leading-10 md:leading-[73px] font-sportingG ">
          Healthy in side <br /> fresh out side
        </h1>
      </div>
      <div className=" flex items-center ">
        <p className="text-justify font-poppins text-xs md:text-base ">
          Healthy in side fresh out side Exercise is a very important need for
          our body. Health and fitness will be obtained if you can do regular
          exercise and run a healthy routine. Even at home we still have to be
          diligent in exercising, either alone or with your friends at home.
          Healthy life makes you more excited to live the day
        </p>
      </div>
    </div>
  );
};

export default Healthy;
