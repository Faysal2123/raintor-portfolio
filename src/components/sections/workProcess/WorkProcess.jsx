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
      <div className="w-11/12 mx-auto text-white py-16 px-4">
        {/* Section Header */}
        <div className="text-center mb-16 items-center flex gap-[550px]">
          <Button1 isDark={true} title="Work Process" />
          <h1 className="text-4xl font-bold text-center">
            My Work Process
          </h1>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-black transition-all duration-300 border border-gray-700 rounded-2xl p-8 shadow-md"
            >
              <div className="flex items-center justify-between pb-4">
                <button className="bg-[#C5FFEE] text-black text-sm px-4 py-1 rounded-full font-semibold">
                  {card.title}
                </button>
                <div className="flex items-center gap-1 text-white cursor-pointer">
                  <IoIosArrowRoundForward size={22} />
                  <p className="underline text-sm">Read More</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-[15px]">
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
