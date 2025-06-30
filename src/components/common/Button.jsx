import React from "react";

const Button = ({ title, icon, isDark = false }) => {
  const baseColor = isDark ? "border-white text-white" : "border-black text-black";
  const hoverStyle = isDark
    ? "hover:bg-white hover:text-black hover:border-white"
    : "hover:bg-black hover:text-white hover:border-white";

  return (
    <div className="flex justify-start">
      <div
        className={`group p-3 border rounded-3xl flex items-center cursor-pointer pr-15 transition-all duration-300 ${baseColor} ${hoverStyle}`}
      >
        <div
          className={`p-2 border rounded-full relative right-3 transition-all duration-300 ${baseColor} group-hover:border-white`}
        >
          <span className="group-hover:text-white transition-all duration-300 text-black">
            {icon}
          </span>
        </div>
        <h1 className="font-semibold group-hover:text-white transition-all duration-300">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Button;
