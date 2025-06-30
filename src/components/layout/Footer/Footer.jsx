import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <footer className="bg-black text-white md:px-6 py-12">
      <div className="w-10/12 mx-auto">
        <div className="flex lg:gap-[750px] items-center flex-col md:flex-row">
          <h2 className="text-3xl font-bold tracking-tight text-lime-400 mb-4 md:mb-0">
            DEVLOP.ME
          </h2>
          <div className="text-white">
            <p className="text-[48px] md:text-[64px] font-bold leading-tight font-face">
              As you can
            </p>
          </div>
        </div>

        <div className="flex justify-end ">
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-300  p-6 w-full md:w-auto">
            <div>
              <p className="mb-3 font-semibold text-sm">Say hello</p>
              <p>HELLO@DEVLOP.ME.COM</p>
              <p>MAHBUBUL@ME.COM</p>
              <p className="mt-4 font-semibold text-sm">Call</p>
              <p>+784549 4981 00</p>
              <p>+8845 0100 211</p>
            </div>

            <div>
              <p className="mb-3 font-semibold text-sm">Menu</p>
              <p>HOME</p>
              <p>ABOUT</p>
              <p>PORTFOLIO</p>
              <p>BLOG</p>
            </div>

            <div>
              <p className="mb-3 font-semibold text-sm">Social</p>
              <p>TWITTER</p>
              <p>INSTAGRAM</p>
              <p>FACEBOOK</p>
              <p>BEHANCE</p>
              <p>DRIBBBLE</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="text-xl font-bold text-white">BESNIK</p>
          <p>© devlop.me 2022</p>
          <p>PRIVACY - TERMS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
