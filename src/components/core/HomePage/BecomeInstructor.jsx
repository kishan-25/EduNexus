import React from "react";
import standing_lady_with_book from "../../../assets/Images/standing_lady_with_book.png";
import HiglightedText from "./HiglightedText";
import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa";

const BecomeInstructor = () => {
  return (
    <div className="w-full flex flex-col md:flex-row p-6 sm:p-10 md:p-20 gap-10 justify-center items-center min-h-[60vh] md:min-h-[90vh]">
      {/* Left Side - Image Section */}
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <img
          src={standing_lady_with_book}
          alt="Standing Lady with Book"
          className="object-contain w-[80%] sm:w-[70%] md:w-full max-w-sm md:max-w-full"
        />
      </div>

      {/* Right Side - Text or Additional Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 flex flex-col">
          Become an
          <HiglightedText text=" Instructor" />
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-6 max-w-md">
          Share your knowledge and inspire students around the world by becoming
          an instructor. Join a community of passionate educators and make a
          difference.
        </p>
        <CTAButton
          text={
            <>
              <p>Start Teaching Today</p>
              <FaArrowRight />
            </>
          }
          color="yellow"
          link="/signup"
        />
      </div>
    </div>
  );
};

export default BecomeInstructor;