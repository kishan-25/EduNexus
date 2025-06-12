import React from 'react';
import { Link } from 'react-router-dom';

function Button(props){

  return ( 
    <Link to={props.link}>
      <div className={`mt-4 sm:mt-6 lg:mt-12 py-1 mx-1 sm:mx-2 lg:mx-5 rounded-md text-richblack-200 transition-all duration-200 hover:scale-95 w-fit ${props.color==='yellow' ? "bg-yellow-400 text-zinc-900":"bg-zinc-600 text-white"}`}>
      <div className='flex items-center gap-2 rounded-full px-4 sm:px-6 lg:px-10 py-[5px] transition-all duration-200 font-semibold text-xs sm:text-sm lg:text-base'>
          {props.text}
        </div>
      </div>
    </Link>
  );
};

export default Button;