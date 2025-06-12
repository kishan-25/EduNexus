import {FaArrowRight} from 'react-icons/fa';
import React from 'react';
import {Link} from 'react-router-dom';
import CTAButton from '../components/core/HomePage/Button';
import HiglightedText from '../components/core/HomePage/HiglightedText';
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import Banner from '../assets/Images/banner.mp4';
import TimelineSection from '../components/core/HomePage/TimelineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import BecomeInstructor from '../components/core/HomePage/BecomeInstructor';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import Footer from '../components/common/Footer';

const Home = ()=>{
    return (
        // Section 1
      <div className='mx-auto flex flex-col items-center text-white justify-center'>
        <div className='mx-auto flex flex-col w-11/12 items-center text-white justify-center px-4 lg:px-0'>
          <Link to="/signup">
            <div className='group mt-8 lg:mt-16 p-1 mx-auto rounded-full bg-zinc-700 text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'>
              <div className='flex items-center gap-2 rounded-full px-4 sm:px-6 lg:px-10 py-[5px] text-xs sm:text-sm lg:text-base transition-all duration-200 group-hover:bg-richblack-900'>
                <p>Become a instructor</p>
                <FaArrowRight className='text-xs lg:text-sm'/>
              </div>
            </div>
          </Link>

          <div className='flex flex-col font-semibold text-xl sm:text-2xl lg:text-4xl mt-7 text-center'>
            <p className='text-white'>Empower your future with&nbsp;</p>
            <HiglightedText text={"Coding Skills"}/>
          </div>

          <div className='mt-4 w-full sm:w-[80%] lg:w-[45%] text-center text-sm lg:text-sm text-richblack-300 px-2'>
            <p>With our online course you can learn on your own pace, from anywhere in the world and get access to a wealth resources including hands-on projects and quizzes and personalised feedback instructors.</p>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 lg:gap-0 font-semibold mt-6 w-full sm:w-auto justify-center'>
            <CTAButton text="Learn More" color="yellow" link="/login" />
            <CTAButton text="Book a Demo" color="black" link="/signup"/>
          </div>  
        </div>

        <div className='shadow-blue-200 mt-10 mb-8 lg:mb-16 flex justify-center px-4 lg:px-0 w-full'>
          <video muted loop autoPlay className='w-full sm:w-[90%] lg:w-1/2 shadow-4xl'>
            <source src={Banner} type='video/mp4'/>
          </video>
        </div>

        {/* CodeBlock -> 1 */}
        <div className='px-4 lg:px-0 w-full'>
          <CodeBlocks 
            position="lg:flex-row" 
            heading={
              <div className="text-xl sm:text-2xl lg:text-4xl font-semibold">
                Unlock Your <HiglightedText text={"Coding Potential"} /> with our online courses
              </div>
            }
            subheading={
              "With our online course, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors."
            }
            ctabtn1={{
              text: (
                <>
                  <p>Learn More</p>
                  <FaArrowRight />
                </>
              ),
              color: "yellow",
              link: "/login"
            }}
            ctabtn2={{
              text: "Try it Yourself",
              color: "black",
              link: "/signup"
            }}
            codeblock={`<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <nav>
      <a href="one/">One</a><a href="two/">Two</a>
    </nav>
  </body>
</html>`}
            backgroundGradient="yellow" 
            codeColor="text-yellow-500"
          />
        </div>

        {/* CodeBlock -> 2 */}
        <div className='bg-transparent px-4 lg:px-0 w-full'>
          <CodeBlocks
          position="lg:flex-row-reverse" 
          heading={
            <div className='text-xl sm:text-2xl lg:text-4xl font-semibold'>
              Start <HiglightedText text={"Coding in seconds"}/>
            </div>
          }
          subheading={"With our online course you can learn on your own pace, from anywhere in the world and be ready for future world to achieve success. Get a road-map and make your way easy and enthusiast."} 
          ctabtn1={{
              text: (
                <>
                  <p>Learn More</p>
                  <FaArrowRight />
                </>
              ),
              color: "yellow",
              link: "/login"
            }}
          ctabtn2={{
            text: "Try it Yourself",color: "black", link:"/signup"
          }}
          codeblock={`<!DOCTYPE html>
  <html>
    <head>
      <title>Example</title><link rel="stylesheet" href="styles.css" />
    </head>
    <body>
      <nav>
        <a href="one/">One</a><a href="two/">Two</a>
      </nav>
    </body>
  </html>`}
           backgroundGradient="blue" 
           codeColor="blue"/>
        </div>

        <ExploreMore/>

        <div className='homepage_bg h-[200px] lg:h-[333px] w-[100%] bg-repeat flex justify-center items-center px-4'>
            <div className='flex flex-col sm:flex-row gap-4 lg:gap-0'>
              <CTAButton text={<><p>View Full Catalog</p><FaArrowRight /></>} color="yellow" link="/" />
              <CTAButton text="Learn More" color="black" link=""/>
            </div>
        </div>

        <div className='flex flex-col lg:flex-row justify-center mx-auto w-[100%] items-center bg-white p-4 sm:p-8 lg:p-20 px-4 sm:px-8 lg:px-40'>
            <div className='font-bold text-xl sm:text-2xl lg:text-4xl text-black m-2 sm:m-4 lg:m-10 w-full lg:w-[50%] text-center lg:text-left'>
              <p>Get the skills you need for a </p><HiglightedText text="job that is in demand."/>
            </div>
            <div className='flex flex-col text-black w-full lg:w-[50%] text-center lg:text-left'>
              <div className='text-sm sm:text-base'><p>The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p></div>
              <div className='mt-4 lg:mt-0'><CTAButton text="Learn More" color="yellow" link="/signup"/></div>
            </div>
        </div>
        
        <TimelineSection/>

        <LearningLanguageSection/>

        <BecomeInstructor/>

        <Footer/>

      </div>
    )
}

export default Home;