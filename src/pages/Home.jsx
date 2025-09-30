import {FaArrowRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import CTAButton from '../components/core/HomePage/Button';
import HiglightedText from '../components/core/HomePage/HiglightedText';
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import Banner from '../assets/Images/banner.mp4';
import TimelineSection from '../components/core/HomePage/TimelineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import BecomeInstructor from '../components/core/HomePage/BecomeInstructor';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import ReviewSlider from '../components/common/ReviewSlider';


const Home = ()=>{
    return (
        // Section 1
      <div className='mx-auto flex flex-col items-center text-white justify-center'>
        <div className='mx-auto flex flex-col w-11/12 items-center text-white justify-center'>
          <Link to="/signup">
            <div className='group mt-16 p-1 mx-auto rounded-full bg-zinc-700 text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'>
              <div className='flex items-center gap-2 rounded-full px-4 sm:px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
                <p className='text-sm sm:text-base'>Become an instructor</p>
                <FaArrowRight/>
              </div>
            </div>
          </Link>

          <div className='flex flex-col sm:flex-row font-semibold text-2xl sm:text-4xl mt-7 text-center'>
            <p className='text-white'>Empower your future with&nbsp;</p>
            <HiglightedText text={"Coding Skills"}/>
          </div>

          <div className='mt-4 w-full sm:w-[90%] md:w-[70%] lg:w-[45%] text-center text-sm text-richblack-300 px-4 sm:px-0'>
            <p>With our online course you can learn on your own pace, from anywhere in the world and get access to a wealth resources including hands-onn projects and quizess and personalised feedback instructors.</p>
          </div>

          <div className='flex flex-col sm:flex-row font-semibold lg:gap-4 sm:gap-1 mt-2'>
            <CTAButton text="Learn More" color="yellow" link="/login" ></CTAButton>
            <CTAButton text="Book a Demo" color="black" link="/signup"></CTAButton>
          </div>  
        </div>

        <div className='shadow-blue-200 mt-10 mb-16 flex justify-center w-full px-4 sm:px-0'>
          <video muted loop autoPlay className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2 shadow-4xl'>
            <source src={Banner} type='video/mp4'/>
          </video>
        </div>

        {/* CodeBlock -> 1 */}
        <div className='w-full px-4 sm:px-0'>
          <CodeBlocks 
            position="lg:flex-row" 
            heading={
              <div className="text-2xl sm:text-4xl font-semibold">
                Unlock Your <HiglightedText text={"Coding Potential"} /> &nbsp;with our online courses
              </div>
            }
            subheading={
              "With our online courses, you can learn at your own pace, from coast to cloud — and unlock a world full of resources, including hands-on projects and quizess and personalised feedback instructors. Ready to start?"
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
        <div className='bg-transparent w-full px-4 sm:px-0'>
          <CodeBlocks
          position="lg:flex-row-reverse" 
          heading={
            <div className='text-2xl sm:text-4xl font-semibold'>
              Start<HiglightedText text={"Coding in seconds"}/>
            </div>
          }
          subheading={"Code now- no waiting, no hassle Learn at your own pace, from anywhere in the world — and get ready to thrive in tomorrow's world. With a clear roadmap and guided support, your path to success becomes simple and exciting."} 
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

        <div className='homepage_bg h-[200px] sm:h-[333px] w-[100%] bg-repeat flex justify-center items-center'>
            <div className='flex flex-col sm:flex-row lg:gap-4 sm:gap-1'>
              <CTAButton text={<><p>View Full Catalog</p><FaArrowRight /></>} color="yellow" link="/" />
              <CTAButton text="Learn More" color="black" link=""/>
            </div>
        </div>

        <div className='flex flex-col lg:flex-row justify-center mx-auto w-[100%] items-center bg-white p-8 sm:p-20 px-8 sm:px-40'>
            <div className='font-bold text-2xl sm:text-4xl text-black m-4 sm:m-10 w-full lg:w-[50%] text-center lg:text-left'>
              <p >Get the skills that</p><HiglightedText text="employers are looking for."/>
            </div>
            <div className='flex flex-col text-black w-full lg:w-[50%] text-center lg:text-left'>
              <div className='mb-4'><p>The modern EduNexus is the dictates its own terms. Today, to be a competitive specialist requires more than just professional skills.</p></div>
              <div><CTAButton text="Learn More" color="yellow" link="/signup"/></div>
            </div>
        </div>
        
        <TimelineSection/>

        <LearningLanguageSection/>

        <BecomeInstructor/>
        
        {/* <ReviewSlider/> */}

      </div>
    )
}

export default Home;