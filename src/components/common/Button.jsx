import React from "react";

const Button = ({ title, icon, isDark = false }) => {
  const borderColor = isDark ? "border-white text-white" : "border-black text-black";

  return (
    <div className="flex justify-start">
      <div className={`p-3 border rounded-3xl flex items-center cursor-pointer pr-10 ${borderColor}`}>
        <div className={`p-2 border rounded-full relative right-3 ${borderColor}`}>
          {icon}
        </div>
        <h1 className="font-semibold">{title}</h1>
      </div>
    </div>
  );
};

export default Button;
