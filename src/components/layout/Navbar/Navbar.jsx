import React from "react";
import Button from "../../common/Button";
import { MdOutlineArrowForward } from "react-icons/md";
import './Navbar.css'
import ThemeToggle from "../../ThemeToggle/ThemeToggle";
const Navbar = () => {
  return (
    <div className="navbar lg:w-10/12 mx-auto text-black pt-4 absolute top-0 left-0 right-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-white text-black rounded-box w-52 z-10 "
          >
            <li><a className="text-base font-face dark:text-white">Home</a></li>
            <li><a className="text-base font-face dark:text-white">About</a></li>
            <li><a className="text-base font-face dark:text-white">Portfolio</a></li>
            <li><a className="text-base font-face dark:text-white">Blog</a></li>
             <Button title="Start Project" icon={<MdOutlineArrowForward />} />
          </ul>
        </div>
        <a className=" normal-case text-xl md:text-3xl text-black font-bold dark:text-white">DEVLOP.ME</a>
      </div>

      <div className="navbar-end space-x-2">
        <ul className="menu menu-horizontal px-1 hidden lg:flex text-black">
          <li><a className="text-base font-face dark:text-white">Home</a></li>
          <li><a className="text-base font-face dark:text-white">About</a></li>
          <li><a className="text-base font-face dark:text-white">Portfolio</a></li>
          <li><a className="text-base font-face dark:text-white">Blog</a></li>
          
        </ul>
        <ThemeToggle></ThemeToggle>
       
      </div>
    </div>
  );
};

export default Navbar;
