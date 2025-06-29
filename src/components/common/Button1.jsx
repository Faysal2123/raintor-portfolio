import React from 'react';
import { IoArrowDown } from 'react-icons/io5';

const Button1 = ({title,isDark}) => {
    return (
       <div>
      <div className='flex items-center'>
        <div className={`p-2 border rounded-full ${isDark ? 'border-white' : 'border-black'}`}>
          <IoArrowDown size={25} />
        </div>
        <h1 className={`p-2 border rounded-2xl px-4 ${isDark ? 'border-white' : 'border-black'}`}>
          {title}
        </h1>
      </div>
    </div>
    );
};

export default Button1;