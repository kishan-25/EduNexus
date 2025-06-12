import React from 'react';
import CTAButton from '../HomePage/Button';
import { TypeAnimation } from 'react-type-animation';

const CodeBlocks = ({
  position,
  heading, 
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div className={`flex flex-col ${position} my-10 lg:my-20 justify-center gap-6 lg:gap-10 w-full bg-transparent px-4 lg:px-0`}>
      {/* Heading and Buttons Section */}
      <div className="flex flex-col w-full lg:w-[50%] mx-2 sm:mx-4 lg:mx-20 justify-center order-1 lg:order-none">
        <div className="text-center mb-3 lg:mb-5 text-2xl sm:text-3xl lg:text-4xl font-semibold">
          {heading}
        </div>
        <div className="text-richblack-300 text-center text-sm lg:text-base px-2 mb-6 lg:mb-8">
          {subheading}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-7 justify-center items-center">
          <CTAButton text={ctabtn1.text} color={ctabtn1.color} link={ctabtn1.link} />
          <CTAButton text={ctabtn2.text} color={ctabtn2.color} link={ctabtn2.link} />
        </div>
      </div>

      {/* Code Block Section */}
      <div className="flex w-full lg:w-[50%] mx-2 lg:mx-20 relative bg-transparent order-2 lg:order-none">
        {/* Background Gradient */}
        {backgroundGradient && (
          <div 
            className={`absolute inset-0 opacity-20 ${backgroundGradient} blur-sm`}
            style={{ zIndex: -1 }}
          />
        )}
        
        {/* Line Numbers */}
        <div className="flex flex-col text-center w-[8%] lg:w-[10%] text-richblack-300 font-bold bg-transparent text-xs lg:text-base py-4">
          {Array.from({ length: 13 }, (_, i) => (
            <p key={i} className="leading-6 lg:leading-7">
              {i + 1}
            </p>
          ))}
        </div>

        {/* Code Block */}
        <div
          className={`w-[92%] lg:w-[90%] flex flex-col gap-2 font-mono ${codeColor} px-2 lg:px-4 py-4 bg-transparent rounded-lg text-xs lg:text-base overflow-x-auto relative`}
          style={{
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.7), 0px -4px 10px rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          }}
        >
          <TypeAnimation
            sequence={[codeblock, 2000, '']}
            repeat={Infinity}
            cursor={true}
            omitDeletionAnimation={true}
            style={{
              whiteSpace: 'pre-wrap',
              display: 'block',
              width: '100%',
              fontSize: 'inherit',
              lineHeight: '1.5',
              fontFamily: 'inherit',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;