import React, { useState } from "react";
import HiglightedText from "./HiglightedText";
import { HomePageExplore } from "../../../data/homepage-explore";
import { FaUsers, FaChartLine } from "react-icons/fa";

const tabsName = ["Free", "New to Coding", "Most Popular", "Skill Paths", "Career Paths"];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourse] = useState(HomePageExplore[0].courses);

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourse(result.length > 0 ? result[0].courses : []);
  };

  return (
    <div className="relative flex flex-col justify-center items-center px-4 sm:px-8 md:px-20 py-10 md:py-20 w-full">
      {/* Heading */}
      <div className="text-2xl sm:text-3xl md:text-4xl font-semibold flex flex-wrap justify-center text-gray-300 text-center">
        <p>Unlock the&nbsp;</p>
        <HiglightedText text="Power of Coding" />
      </div>

      {/* Subheading */}
      <p className="text-xs sm:text-sm mt-3 sm:mt-5 text-center">
        Learn to build anything you can imagine
      </p>

      {/* Tabs */}
      <div className="flex overflow-x-auto bg-gray-700 rounded-full py-1 mt-5 px-2 sm:px-4 scrollbar-hide">
        {tabsName.map((element, index) => (
          <div
            key={index}
            className={`text-sm sm:text-base flex items-center whitespace-nowrap mx-2 sm:mx-3 rounded-full transition-all duration-200 cursor-pointer px-4 py-1 ${
              currentTab !== element
                ? "bg-gray-700 text-gray-100"
                : "bg-gray-900 text-gray-300"
            } hover:bg-zinc-800`}
            onClick={() => setMyCards(element)}
          >
            {element}
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="relative mt-10 md:mt-16 w-full flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center md:items-stretch">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className={`w-full sm:w-[80%] md:w-1/3 flex flex-col justify-between rounded-lg p-4 ${
              idx === 0 ? "bg-white text-zinc-900" : "bg-zinc-800 text-white"
            }`}
            style={idx === 0 ? { boxShadow: "10px 10px 0px #FFD60A" } : {}}
          >
            <div>
              <p className="text-lg sm:text-xl font-semibold">{course.heading}</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                {course.desciption}
              </p>
            </div>
            <div className="flex w-full justify-center mt-5 border-t-2 border-zinc-400 border-dashed">
              <div className="text-blue-400 w-1/2 flex justify-center items-center gap-2 text-xs sm:text-sm py-3">
                <FaUsers /> {course.level}
              </div>
              <div className="text-blue-400 w-1/2 flex justify-center items-center gap-2 text-xs sm:text-sm py-3">
                <FaChartLine /> {course.lessonNumber}&nbsp;Lessons
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;