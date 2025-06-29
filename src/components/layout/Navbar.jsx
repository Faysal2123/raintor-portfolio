import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-3 shadow"
          >
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Portfolio</a></li>
            <li><a>Blog</a></li>
           
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">DEVLOP.ME</a>
      </div>

      <div className="navbar-end space-x-2">

        <ul className="menu menu-horizontal px-1 hidden lg:flex">
           <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Portfolio</a></li>
            <li><a>Blog</a></li>
        </ul>
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
