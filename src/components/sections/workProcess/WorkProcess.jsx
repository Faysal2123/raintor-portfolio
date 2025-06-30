import React from "react";
import Button1 from "../../common/Button1";
import { IoIosArrowRoundForward } from "react-icons/io";

const cards = [
  {
    title: "Discovery",
    description:
      "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
  },
  {
    title: "Strategy",
    description:
      "Based on our discovery, we create a strategic plan tailored to your goals, budget, and timeline. Planning ensures every detail is aligned before we begin.",
  },
  {
    title: "Design",
    description:
      "Our expert team gets to work, using the latest technologies and methodologies to turn your vision into a high-quality, functional product.",
  },
  {
    title: "Build",
    description:
      "After thorough testing and refinement, we deliver the final product with full documentation and support for a smooth handover or launch.",
  },
];

const WorkProcess = () => {
  return (
    <div className="bg-[#141414] mt-20">
      <div className="w-11/12 md:w-9/12 mx-auto text-white py-16 px-4">
        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <Button1 isDark={true} title="Work Process" />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center font-face">
            My Work Process
          </h1>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group bg-black border border-gray-700 rounded-2xl p-6 md:p-10 lg:p-14 shadow-md transition-all duration-300 transform hover:rotate-3 hover:scale-105 hover:bg-[#C5FF41]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4">
                <button className="bg-[#C5FFEE] text-black text-sm sm:text-base px-4 py-1 rounded-full font-semibold group-hover:bg-black group-hover:text-white transition-all duration-300 font-face">
                  {card.title}
                </button>

                <div className="flex items-center gap-1 text-white group-hover:text-black cursor-pointer">
                  <IoIosArrowRoundForward size={26} />
                  <p className="underline text-base sm:text-lg font-face">Read More</p>
                </div>
              </div>
              <p className="text-gray-300 group-hover:text-black leading-relaxed text-[15px] sm:text-[17px] font-face">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
