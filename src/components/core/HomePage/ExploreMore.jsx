import React, { useState } from 'react'
import HiglightedText from './HiglightedText';
import { HomePageExplore } from '../../../data/homepage-explore';
import { FaUsers } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
const tabsName = ["Free", "New to Coding", "Most Popular", 'Skill Paths', 'Career Paths'];

const ExploreMore = () => {
    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourse] = useState(HomePageExplore[0].courses);

    const setMyCards = (value) => { 
      setCurrentTab(value);
      const result = HomePageExplore.filter((course) => course.tag === value);
      if (result.length > 0) {
        setCourse(result[0].courses);
        console.log(result[0].courses)
      } else {
        setCourse([]);
      }
    };
    
  return (
    <div className='relative flex flex-col justify-center items-center p-4 sm:p-8 lg:p-20 w-full pb-32 sm:pb-40 lg:pb-48'>

      <div className='text-2xl sm:text-3xl lg:text-4xl font-semibold flex text-gray-300 text-center'>
        <p>Unlock the </p><HiglightedText text="Power of Coding"/>
      </div>
      
      <p className='text-sm mt-5 text-center px-4'>Learn to build anything You can imagine</p>

      {/* Mobile: Scrollable tabs */}
      <div className='flex lg:bg-gray-700 lg:rounded-full lg:py-1 mt-5 w-full lg:w-auto overflow-x-auto lg:overflow-visible'>
        <div className='flex lg:flex-row flex-nowrap lg:flex-wrap bg-gray-700 rounded-full py-1 lg:py-1 w-full lg:w-auto min-w-max lg:min-w-0'>
          {
            tabsName.map((element, index)=>{
              return(
                <div className={`text-xs sm:text-sm lg:text-[16px] flex items-center mx-1 sm:mx-2 lg:mx-5 rounded-full transition-all duration-200 cursor-pointer hover:bg-zinc-800 hover:text-white-200 px-2 sm:px-3 lg:px-5 py-2 whitespace-nowrap ${(currentTab!==element) ? "bg-gray-700 text-gray-100": "bg-gray-900 text-gray-300" }`} key={index} onClick={()=>setMyCards(element)}>
                  {element}
                </div>
              )
            })
          }
        </div>
      </div>

      {/* Mobile: Stack cards vertically, Desktop: Keep horizontal */}
      <div className='absolute bottom-[-35%] sm:bottom-[-30%] lg:bottom-[-25%] left-[50%] translate-x-[-50%] flex flex-col lg:flex-row gap-4 lg:gap-10 w-[90%] sm:w-[80%] lg:w-[60%]'>

        <div className='w-full lg:w-1/3 flex flex-col justify-left bg-white text-zinc-900' style={{boxShadow: "10px 10px 0px #FFD60A",}}>
          <p className='text-lg sm:text-xl font-semibold px-4 sm:px-5 pt-4 sm:pt-5'>{courses[0].heading}</p>
          <p className='text-xs sm:text-sm text-gray-500 px-4 sm:px-5 pt-3'>{courses[0].desciption}</p>
          <div className='flex w-full justify-center mt-5 sm:mt-7 pt-4 sm:pt-5'>
            <div className='text-blue-400 w-1/2 border-t-2 border-zinc-400 flex justify-center border-dashed p-2 sm:p-3 items-center gap-1 sm:gap-2 text-xs sm:text-sm'><FaUsers/>{courses[0].level}</div>
            <div className='text-blue-400 w-1/2 border-t-2 border-zinc-400 flex justify-center border-dashed p-2 sm:p-3 items-center gap-1 sm:gap-2 text-xs sm:text-sm'><FaChartLine/>{courses[0].lessonNumber}&nbsp;Lessons</div>
          </div>
        </div>
        
        <div className='w-full lg:w-1/3 flex flex-col justify-left bg-zinc-800 text-zinc-900'>
          <p className='text-lg sm:text-xl font-semibold px-4 sm:px-5 pt-4 sm:pt-5 text-white'>{courses[1].heading}</p>
          <p className='text-xs sm:text-sm text-gray-500 px-4 sm:px-5 pt-3'>{courses[1].desciption}</p>
          <div className='flex w-full justify-center mt-5 sm:mt-7 pt-4 sm:pt-5'>
            <div className='text-blue-400 w-1/2 border-t-2 border-zinc-400 flex justify-center border-dashed p-2 sm:p-3 items-center gap-1 sm:gap-2 text-xs sm:text-sm'><FaUsers/>{courses[1].level}</div>
            <div className='text-blue-400 w-1/2 border-t-2 border-zinc-400 flex justify-center border-dashed p-2 sm:p-3 items-center gap-1 sm:gap-2 text-xs sm:text-sm'><FaChartLine/>{courses[1].lessonNumber}&nbsp;Lessons</div>
          </div>
        </div>

        <div className='w-full lg:w-1/3 flex flex-col justify-left bg-zinc-800 text-zinc-900'>
          <p className='text-lg sm:text-xl font-semibold px-4 sm:px-5 pt-4 sm:pt-5 text-white'>{courses[2].heading}</p>
          <p className='text-xs sm:text-sm text-gray-500 px-4 sm:px-5 pt-3'>{courses[2].desciption}</p>
          <div className='flex w-full justify-center mt-5 sm:mt-7 pt-4 sm:pt-5'>
            <div className='text-blue-400 w-1/2 border-t-2 border-zinc-400 flex justify-center border-dashed p-2 sm:p-3 items-center gap-1 sm:gap-2 text-xs sm:text-sm'><FaUsers/>{courses[2].level}</div>
            <div className='text-blue-400 w-1/2 border-t-2 border-zinc-400 flex justify-center border-dashed p-2 sm:p-3 items-center gap-1 sm:gap-2 text-xs sm:text-sm'><FaChartLine/>{courses[2].lessonNumber}&nbsp;Lessons</div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ExploreMore;