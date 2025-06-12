import React from 'react';
import StudyDetails from './StudyDetails';
import study_image from '../../../assets/Images/study_image.jpg'

const TimelineSection = () => {
  return (
    <div className="bg-white w-full flex flex-col lg:flex-row justify-center items-center px-4 sm:px-8 lg:px-40 py-8 lg:py-0 gap-8 lg:gap-0">
      <div className="flex flex-col w-full lg:w-[40%] gap-4 lg:gap-6 mb-8 lg:mb-0">
        <StudyDetails 
          icon="SlBadge" 
          name="Leadership" 
          description="Fully committed to the success company" 
          color="blue"
        />
        <StudyDetails 
          icon="FaGraduationCap" 
          name="Responsibility" 
          description="Students will always be our top priority" 
          color="orange"
          />
        <StudyDetails 
          icon="BiDiamond" 
          name="Flexibility" 
          description="The ability to switch is an important skill" 
          color="emerald"
          />
        <StudyDetails 
          icon="HiMiniCodeBracket" 
          name="Solve the problem" 
          description="Code your way to a solution" 
          color="yellow"
          />
      </div>

      <div className="w-full lg:w-[60%] flex p-4 lg:p-10 shadow-2xl object-fit relative">
        <img src={study_image} alt="" className="w-full" />
        <div className='absolute bg-green-700 flex flex-col sm:flex-row lg:flex-row text-white uppercase p-4 sm:p-6 lg:p-10 items-center justify-center w-[95%] sm:w-[90%] lg:w-[50%] left-[50%] translate-x-[-50%] bottom-[-5%] sm:bottom-[-7%] lg:bottom-[-5%] gap-4 sm:gap-6 lg:gap-0'>
            <div className='flex gap-3 lg:gap-5 items-center justify-center border-b sm:border-b-0 lg:border-b-0 sm:border-r lg:border-r border-green-300 pb-4 sm:pb-0 lg:pb-0 pe-0 sm:pe-5 lg:pe-5'>
              <p className='font-bold text-2xl lg:text-3xl'>10</p>
              <p className='text-green-300 text-xs lg:text-sm'>Years of Experience</p>
            </div>
            <div className='flex gap-3 lg:gap-5 items-center justify-center ps-0 sm:ps-5 lg:ps-5'>
              <p className='font-bold text-2xl lg:text-3xl'>250</p>
              <p className='text-green-300 text-xs lg:text-sm'>Type of courses</p>
            </div>
        </div>
      </div>

    </div>
  );
};

export default TimelineSection;