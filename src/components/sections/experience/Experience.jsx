import React from "react";
import "./Experience.css";
import Button1 from "../../common/Button1";

const Experience = () => {
  return (
    <div
      className="
        bg-gradient-to-br from-[#CCFF02] via-transparent to-transparent 
        dark:bg-gray-900 dark:text-white
        pt-20 pb-20
      "
    >
      <div className="w-10/12 mx-auto">
        <div className="flex justify-end relative pt-24 mx-auto lg:w-[720px]">
         
          <Button1 title="About" isDark={false} />
        </div>

        <h1 className="text-3xl md:text-7xl mb-4 pt-10 pb-5 md:pb-10 font-face text-center dark:text-white">
          <span>I've been</span>{" "}
          <span className="bg-black dark:bg-white text-white dark:text-black rounded-md px-2">
            Developing
          </span>{" "}
          for
          <br />
          <div className="mt-6">
            <span>Websites since</span>{" "}
            <span className="bg-black dark:bg-white text-white dark:text-black rounded-md px-2">
              2013
            </span>
          </div>
        </h1>

        <p className="text-center font-face mx-auto lg:w-[720px] dark:text-white">
          We start every new client interaction with an in-depth discovery call
          where we get to know each other and recommend the best course of action.
        </p>

        <div className="pt-20 flex flex-col md:flex-row gap-10 mx-auto px-4 lg:w-[1600px]">
          <div className="text-center md:text-left dark:text-white">
            <h1 className="text-4xl font-face font-semibold leading-tight w-[250px]">
              PREVIOUSLY <br /> WORKED ON
            </h1>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-2 gap-6 w-full">
            {[
              "awwwards",
              "facebook",
              "cssdesignaward",
              "cssvinner",
              "/thoughtworks",
              "AUTODESK",
            ].map((name, i) => {
              const rotationClasses = [
                "rotate-12",
                "",
                "rotate-12",
                "",
                "-rotate-6",
                "",
              ];
              return (
                <div
                  key={i}
                  className={`
                    border rounded-full flex items-center justify-center h-20 px-6 
                    hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
                    font-bold text-base transition-all duration-300 shadow-md
                    ${rotationClasses[i]}
                    ${name === "AUTODESK" ? "h-16 px-20 mr-20" : ""}
                    ${name === "facebook" ? "lg:-mr-10" : ""}
                    dark:text-white
                  `}
                >
                  {name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
