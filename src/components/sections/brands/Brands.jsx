import React from "react";
import Button1 from "../../common/Button1";
import Button from "../../common/Button";
import { FaPhoneAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import BrandButton from "../../common/BrandButton";
import { useTheme } from "../../context/ThemeContext";

const Brands = () => {
  const { isDarkMode } = useTheme(); 

  return (
    <div
      className={`pt-20 pb-20 transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900 text-white" : "text-black"
      }`}
      style={{
        background: !isDarkMode
          ? "linear-gradient(170deg, #ffffff 40%, #CCFF02 80%, #59FFCD00)"
          : undefined,
      }}
    >
      <div className="w-10/12 mx-auto">

        <Button1 title="Contact" isDark={isDarkMode} />

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-16 md:gap-20">

          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-7xl mb-4 pt-5 pb-5 md:pb-10 font-face">
              <span>Interested in</span>
            </h1>

            <div className="text-3xl md:text-7xl font-face">
              <span
                className={`rounded-md px-2 ${
                  isDarkMode ? "bg-white text-black" : "bg-black text-white"
                }`}
              >
                work
              </span>{" "}
              <span>together?</span>
            </div>

            <p className="font-face mt-6 max-w-md">
              We start every new client interaction with an in-depth discovery
              call where we get to know each other.
            </p>

            <div className="mt-6">
              <Button title="Schedule a Call" icon={<FaPhoneAlt />} />
            </div>
          </div>

          <div
            className={`${
              isDarkMode ? "bg-gray-800" : "bg-black"
            } text-white p-8 rounded-xl shadow-lg w-full md:w-1/2 max-w-md`}
          >
            <form>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 mb-6 bg-transparent border-b border-b-white/40 placeholder-white/50
                focus:outline-none focus:border-b-white transition-all duration-300
                focus:brightness-125 focus:shadow-[0_0_10px_white]"
              />
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-3 mb-6 bg-transparent border-b border-b-white/40 placeholder-white/50
                focus:outline-none focus:border-b-white transition-all duration-300
                focus:brightness-125 focus:shadow-[0_0_10px_white]"
              />
              <textarea
                placeholder="Describe your project"
                rows="4"
                className="w-full p-3 mb-6 bg-transparent border-b border-b-white/40 placeholder-white/50
                focus:outline-none focus:border-b-white transition-all duration-300
                focus:brightness-125 focus:shadow-[0_0_10px_white]"
              />
  
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-center text-center sm:text-left">
                <BrandButton
                  icon={<RiSendPlaneFill />}
                  title="Send"
                  isDark={true}
                />
                <h1 className="text-xl font-semibold">or</h1>
                <BrandButton
                  icon={<MdOutlineMessage />}
                  title="Contact me"
                  isDark={true}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
