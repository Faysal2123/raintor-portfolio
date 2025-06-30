import React from "react";
import backgroundImage from "../../../../public/hero-bg.png";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
} from "react-icons/fa";
import "./hero.css";
import { HiArrowLongUp } from "react-icons/hi2";
import Button from "../../common/Button";
const Hero = () => {
  return (
    <section
  className="bg-cover bg-center flex md:min-h-[700px] bg-white dark:bg-gray-900 dark:text-white"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
  <div className="w-10/12 mx-auto mt-20">
    <h1 className="text-3xl md:text-7xl mb-4 md:pt-20 pt-10 pb-5 md:pb-10 font-face
      text-black dark:text-white"
    >
      <span>Trusted</span>{" "}
      <span className="bg-black dark:bg-white text-white dark:text-black">Partner</span> for
      <br />
      <div className="mt-6">
        <span className="text-black dark:text-white">Your Website</span>{" "}
        <span className="bg-black dark:bg-white rounded-md text-white dark:text-black">
          Develop.
        </span>
      </div>
    </h1>
    <p className="text-sm md:text-base mb-6 max-w-md mx-auto font-face text-black dark:text-gray-300">
      Building the world's best marketing websites for over a decade. Your
      trusted partner for strategy, design, and dev.
    </p>
    <div className="flex justify-start p-5 md:w-[490px] mx-auto">
      <Button title="Schedule a Call" icon={<FaPhoneAlt />} />
    </div>
    <div className="flex items-center relative">
      <h1 className="text-black dark:text-white text-base -rotate-90 leading-none absolute -left-14 top-1/2 font-face">
        @williamrey
      </h1>
      <div className="flex flex-col items-center space-y-2">
        <FaTwitter className="text-black dark:text-white text-xl -rotate-90" />
        <FaInstagram className="text-black dark:text-white text-xl -rotate-90" />
        <FaFacebookF className="text-black dark:text-white text-xl -rotate-90" />
        <span>
          <HiArrowLongUp size={40} className="text-black dark:text-white" />
        </span>
      </div>
    </div>
  </div>
</section>

  );
};

export default Hero;
