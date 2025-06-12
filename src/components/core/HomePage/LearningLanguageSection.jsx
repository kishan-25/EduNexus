import React from 'react';
import HiglightedText from './HiglightedText';
import Imagells1 from '../../../assets/Images/homeStudy1.png';
import Imagells2 from '../../../assets/Images/homeStudy2.png';
import Imagells3 from '../../../assets/Images/homeStudy3.png';
import CTAButton from  './Button';

const LearningLanguageSection = () => {
  return (
    <div className="flex flex-col p-4 sm:p-8 md:p-20 lg:p-40 bg-white w-full justify-center pb-4 sm:pb-6 md:pb-8 lg:pb-10">

      <div className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black w-full flex justify-center">
        <div className="flex flex-col sm:flex-row items-center text-center gap-1 sm:gap-2">
          <p>Your swiss knife for</p>
          <HiglightedText text="learning a language" />
        </div>
      </div>

      <div className="text-xs sm:text-sm md:text-sm lg:text-sm text-black w-full flex justify-center pt-2 sm:pt-3 md:pt-4 lg:pt-5">
        <p className="w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] text-center px-2">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more
        </p>
      </div>

      <div className="flex flex-col sm:flex-row lg:flex-row w-full items-center justify-center mt-4 sm:mt-6 md:mt-8 lg:mt-10 p-2 sm:p-3 md:p-4 lg:p-5 space-y-4 sm:space-y-0 md:space-y-0 lg:space-y-0 space-x-0 sm:space-x-2 md:space-x-2 lg:space-x-2">
        <img src={Imagells1} alt="" className="shadow-2xl w-32 sm:w-40 md:w-48 lg:w-auto max-w-full h-auto" style={{ transform: "rotate(15deg)" }}/>
        <img src={Imagells2} alt="" className="shadow-2xl w-32 sm:w-40 md:w-48 lg:w-auto max-w-full h-auto" style={{ transform: "rotate(-8.36deg)" }}/>
        <img src={Imagells3} alt="" className="shadow-2xl w-32 sm:w-40 md:w-48 lg:w-auto max-w-full h-auto" style={{ transform: "rotate(9.88deg)" }}/>
      </div>

      <div className="w-full flex justify-center p-4 sm:p-6 md:p-8 lg:p-10">
        <CTAButton text="Learn More" color="yellow" link="/login" />
      </div>

    </div>
  )
}

export default LearningLanguageSection;