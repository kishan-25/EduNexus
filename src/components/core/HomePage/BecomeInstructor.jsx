import React from 'react';
import standing_lady_with_book from '../../../assets/Images/standing_lady_with_book.jpg';
import HiglightedText from './HiglightedText';
import CTAButton from './Button';
import { FaArrowRight } from 'react-icons/fa';

const BecomeInstructor = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row p-4 sm:p-8 lg:p-20 min-h-[60vh] lg:h-[90vh] gap-6 lg:gap-10">
      {/* Left Side - Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center order-2 lg:order-1">
        <img 
          src={standing_lady_with_book}
          alt="Standing Lady with Book"
          className="object-contain w-full max-w-md lg:max-w-full"
          style={{
            boxShadow: "10px 10px 0px white",
          }}
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:pl-10 order-1 lg:order-2 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 flex flex-col">
          <span>Become an</span>
          <HiglightedText text="Instructor"/>
        </h2>
        <p className="text-sm text-gray-400 mb-6 max-w-md lg:max-w-none px-4 lg:px-0">
          Share your knowledge and inspire students around the world by becoming an instructor. 
          Join a community of passionate educators and make a difference.
        </p>
        <CTAButton text={<><p>Start Teaching Today</p><FaArrowRight /></>} color="yellow" link="/signup"/>
      </div>
    </div>
  );
};

export default BecomeInstructor;