import React from "react";

const BrandButton = ({ title, icon, isDark = false }) => {
  const baseColor = isDark ? "border-white text-white" : "border-black text-black";

  // হোভার এ সব কালো হবে (text, icon, icon border)
  const hoverStyle = isDark
    ? "hover:bg-white hover:text-black hover:border-black"
    : "hover:bg-white hover:text-black hover:border-black";

  return (
    <div className="flex justify-start">
      <div
        className={`group p-3 border rounded-3xl flex items-center cursor-pointer pr-15 transition-all duration-300 ${baseColor} ${hoverStyle}`}
      >
        <div
          className={`p-2 border rounded-full relative right-3 transition-all duration-300 ${baseColor} group-hover:border-black`}
        >
          <span className="group-hover:text-black transition-all duration-300">
            {React.cloneElement(icon, {
              className: "text-inherit", // parent থেকে কালার নেবে
            })}
          </span>
        </div>
        <h1 className="font-semibold group-hover:text-black transition-all duration-300">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default BrandButton;
