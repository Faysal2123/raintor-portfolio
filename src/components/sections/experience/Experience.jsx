import React from "react";
import "./Experience.css";
import Button1 from "../../common/Button1";
const Experience = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex w-[720px] justify-end relative  pt-24 mx-auto">
        <Button1 title="About" isDark={false}></Button1>
      </div>
      <h1 className="text-3xl md:text-7xl text-black mb-4  pt-10 pb-5 md:pb-10 font-face text-center">
        <span className="text-black">I’ve been</span>{" "}
        <span className="bg-black text-white ">Developing</span> for
        <br />
        <div className="mt-6">
          <span className="text-black">Websites since</span>{" "}
          <span className="bg-black text-white rounded-md">2013</span>
        </div>
      </h1>
      <p className="text-black text-center font-face w-[720px] mx-auto">
        We start every new client interaction with an in-depth discovery call
        where we get to know each other and recommend the best course of action.
      </p>
      <div className="pt-20 flex flex-col md:flex-row gap-10  w-[1600px] mx-auto px-4">
  
  <div className="text-center md:text-left">
    <h1 className="text-4xl font-face font-semibold leading-tight w-[250px]">
      PREVIOUSLY <br /> WORKED ON
    </h1>
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-2 gap-6 w-full">
    <div className="border rounded-full rotate-12 flex items-center justify-center h-20 px-6 hover:bg-black hover:text-white font-bold text-base transition-all duration-300 shadow-md">
      awwwards
    </div>
    <div className="border rounded-full -mr-10 flex items-center justify-center h-20 px-6 hover:bg-black hover:text-white font-bold text-base transition-all duration-300 shadow-md">
      facebook
    </div>
    <div className="border rounded-full rotate-12 flex items-center justify-center h-20 px-6 hover:bg-black hover:text-white font-bold text-base transition-all duration-300 shadow-md">
      css<span>design</span>award
    </div>
    <div className="border rounded-full flex items-center justify-center h-20 px-6 hover:bg-black hover:text-white font-bold text-base transition-all duration-300 shadow-md">
      cssvinner
    </div>
    <div className="border rounded-full -rotate-6 flex items-center justify-center h-20 px-6 hover:bg-black hover:text-white font-bold text-base transition-all duration-300 shadow-md">
      /thoughtworks
    </div>
    <div className="border rounded-full flex items-center justify-center h-20 px-6 hover:bg-black hover:text-white font-bold text-base transition-all duration-300 shadow-md mr-20">
      AUTODESK
    </div>
  </div>
</div>

    </div>
  );
};

export default Experience;
