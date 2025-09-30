import React from "react";
import HiglightedText from "./HiglightedText";
import Imagells1 from "../../../assets/Images/homeStudy1.png";
import Imagells2 from "../../../assets/Images/homeStudy2.png";
import Imagells3 from "../../../assets/Images/homeStudy3.png";
import CTAButton from "./Button";

const LearningLanguageSection = () => {
  return (
    <div className="flex flex-col px-4 sm:px-10 md:px-20 lg:px-40 bg-white w-full justify-center pb-10 pt-10">
      {/* Heading */}
      <div className="font-bold text-2xl sm:text-3xl md:text-4xl text-black w-full flex justify-center text-center flex-wrap">
        <p>Your swiss knife for&nbsp;</p>
        <HiglightedText text="learning a language" />
      </div>

      {/* Subheading */}
      <div className="text-xs sm:text-sm md:text-base text-black w-full flex justify-center pt-5">
        <p className="w-full sm:w-[80%] md:w-[60%] text-center">
          With Spin, mastering multiple languages is easy. Enjoy 20+ languages
          with realistic voice-overs, progress tracking, custom schedules, and
          more.
        </p>
      </div>

      {/* Images */}
      <div className="flex flex-col sm:flex-row w-full items-center justify-center mt-10 p-5 gap-6 sm:gap-10">
        <img
          src={Imagells1}
          alt=""
          className="shadow-2xl w-[80%] sm:w-[30%] max-w-xs"
          style={{ transform: "rotate(15deg)" }}
        />
        <img
          src={Imagells2}
          alt=""
          className="shadow-2xl w-[80%] sm:w-[30%] max-w-xs"
          style={{ transform: "rotate(-8.36deg)" }}
        />
        <img
          src={Imagells3}
          alt=""
          className="shadow-2xl w-[80%] sm:w-[30%] max-w-xs"
          style={{ transform: "rotate(9.88deg)" }}
        />
      </div>

      {/* CTA Button */}
      <div className="w-full flex justify-center p-5">
        <CTAButton text="Learn More" color="yellow" link="/login" />
      </div>
    </div>
  );
};

export default LearningLanguageSection;