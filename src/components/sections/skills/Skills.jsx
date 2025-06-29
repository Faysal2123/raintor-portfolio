import React from 'react';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className='bg-black text-white min-h-[500px]'>
      <div className='w-11/12 mx-auto pt-20 pb-20'>
        {/* Top Section */}
        <div className='flex flex-col md:flex-row justify-between mb-20'>
          <div className='mb-10 md:mb-0'>
            <h1 className='text-5xl md:text-6xl font-bold mb-2'>My Extensive</h1>
            <h1 className='text-5xl md:text-6xl font-bold'>List of Skills</h1>
          </div>

          <div className='max-w-xl'>
            <p className='border-b-2 border-gray-700 pb-5 mb-5 text-lg md:text-xl text-gray-300'>
              Building the world's best marketing. Your trusted partner for strategy,
              design, and development.
            </p>

            <div className='flex items-center space-x-4 justify-end'>
              <button className='p-3 border border-gray-700 rounded-full hover:bg-white hover:text-black transition-all duration-300'>
                <IoMdArrowBack size={24} />
              </button>
              <button className='p-3 border border-gray-700 rounded-full hover:bg-white hover:text-black transition-all duration-300'>
                <IoMdArrowForward size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
   
          <div className='border border-gray-800 rounded-lg p-16 bg-black hover:bg-gray-900 transition-all duration-300 transform hover:rotate-[3deg] hover:-translate-y-1 hover:shadow-lg'>
            <div className='flex space-x-4 mb-6'>
              <FaReact size={60} />
            </div>
            <h2 className='text-2xl font-bold mb-4'>HTML & CSS</h2>
            <p className='text-gray-400'>
              Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis
            </p>
          </div>

          <div className='border border-gray-800 rounded-lg p-16 bg-black hover:bg-gray-900 transition-all duration-300 transform hover:rotate-[3deg] hover:-translate-y-1 hover:shadow-lg'>
            <div className='flex space-x-4 mb-6'>
              <FaReact size={60} />
            </div>
            <h2 className='text-2xl font-bold mb-4'>JavaScript</h2>
            <p className='text-gray-400'>
              Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis
            </p>
          </div>

          <div className='border border-gray-800 rounded-lg p-16 bg-black hover:bg-gray-900 transition-all duration-300 transform hover:rotate-[3deg] hover:-translate-y-1 hover:shadow-lg'>
            <div className='flex space-x-4 mb-6'>
              <FaReact size={60} />
            </div>
            <h2 className='text-2xl font-bold mb-4'>Webflow</h2>
            <p className='text-gray-400'>
              Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
