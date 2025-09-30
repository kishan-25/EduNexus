import React from "react";
import StudyDetails from "./StudyDetails";
import study_image from "../../../assets/Images/study_image.jpg";

const TimelineSection = () => {
  return (
    <div className="bg-white w-full flex flex-col lg:flex-row justify-center items-center px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-8 sm:py-10 lg:py-12 gap-8 lg:gap-10">
      {/* Left Column - Study Details */}
      <div className="flex flex-col w-full lg:w-[40%] xl:w-[45%] gap-4 sm:gap-6 order-2 lg:order-1">
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

      {/* Right Column - Image & Stats */}
      <div className="w-full lg:w-[60%] xl:w-[55%] flex relative order-1 lg:order-2 mb-16 sm:mb-20 lg:mb-0">
        <img
          src={study_image}
          alt="Study"
          className="w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-lg shadow-2xl object-cover"
        />

        {/* Stats Overlay */}
        <div className="absolute bg-green-700 flex flex-row text-white uppercase p-4 sm:p-6 md:p-8 items-center justify-center gap-6 sm:gap-8 w-[90%] sm:w-[85%] md:w-[75%] lg:w-[80%] left-1/2 -translate-x-1/2 bottom-[-12%] sm:bottom-[-10%] md:bottom-[-8%] rounded-lg shadow-lg">
          {/* First Stat */}
          <div className="flex flex-col gap-1 items-center justify-center border-r border-green-300 pe-6 sm:pe-8">
            <p className="font-bold text-2xl sm:text-3xl">10+</p>
            <p className="text-green-300 text-xs sm:text-sm text-center leading-tight">
              YEARS OF<br />EXPERIENCE
            </p>
          </div>
          {/* Second Stat */}
          <div className="flex flex-col gap-1 items-center justify-center ps-6 sm:ps-8">
            <p className="font-bold text-2xl sm:text-3xl">250</p>
            <p className="text-green-300 text-xs sm:text-sm text-center leading-tight">
              TYPE OF<br />COURSES
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;