import React from "react";
import Button1 from "../../common/Button1";
import Button from "../../common/Button";
import { FaPhoneAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";

const Brands = () => {
  return (
    <div className="w-9/12 mx-auto pt-40">
      <div>
        <Button1 title="Contact" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-20">
          <div>
            <h1 className="text-3xl md:text-7xl text-black mb-4 pt-5 pb-5 md:pb-10 font-face">
              <span className="text-black">Interested in</span>
            </h1>

            <div className="text-3xl md:text-7xl font-face">
              <span className="bg-black text-white rounded-md px-2">work</span>{" "}
              <span className="text-black">together?</span>
            </div>

            <p className="font-face w-full max-w-md mt-6">
              We start every new client interaction with an in-depth discovery
              call where we get to know each other.
            </p>

            <div className="mt-6">
              <Button title="Schedule a Call" icon={<FaPhoneAlt />} />
            </div>
          </div>

          <div className="bg-black text-white p-8 rounded-xl shadow-lg w-full max-w-md">
            <form>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 mb-6 bg-transparent text-white border-b border-b-white/40 placeholder-white/50 
                focus:outline-none focus:border-b-white focus:placeholder-white transition-all duration-300 
                focus:brightness-125 focus:shadow-[0_0_10px_white]"
              />
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-3 mb-6 bg-transparent text-white border-b border-b-white/40 placeholder-white/50 
                focus:outline-none focus:border-b-white focus:placeholder-white transition-all duration-300 
                focus:brightness-125 focus:shadow-[0_0_10px_white]"
              />
              <textarea
                placeholder="Describe your project"
                rows="4"
                className="w-full p-3 mb-6 bg-transparent text-white border-b border-b-white/40 placeholder-white/50 
                focus:outline-none focus:border-b-white focus:placeholder-white transition-all duration-300 
                focus:brightness-125 focus:shadow-[0_0_10px_white]"
              />
              <div className="flex gap-10 items-center">
                <Button icon={<RiSendPlaneFill />} title="Send" isDark={true} />
                <h1 className="text-xl font-semibold">or</h1>
                <Button
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
