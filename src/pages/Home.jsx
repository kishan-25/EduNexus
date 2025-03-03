import { Link } from "react-router-dom";
import { FaArrowRight} from "react-icons/fa6";
import HighLightText from "../components/core/HomePage/HighLightText";
import CTAbutton from "../components/core/HomePage/CTAbutton";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import BannerVideo from "../assets/Images/banner.mp4";

export default function Home() {
    return (
        <div className="">
            {/* Section 1 */}
            <div className="relative mx-auto flex flex-col w-11/12 items-center max-w-maxContent
            text-white justify-center">
                <Link to={"/signup"}>
                    <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-900 font-bold 
                    transition-all duration-200 group-hover:scale-95 w-fit">
                       <div className="flex flex-row items-center gap-1 rounded-full px-10 py-[5px] 
                       transition-all duration-200 group-hover:bg-richblack-800">
                       <p>Become an Instructor</p>
                       <FaArrowRight/>
                       </div>
                    </div>
                </Link>

                <div className="flex gap-2 mt-2">
                   <p className="font-bold text-4xl"> Empower Your Future with </p><HighLightText text={"Coding Skills"}/>
                </div>

                <div className="text-pure-greys-300 text-lg text-wrap text-center mt-4 w-[90%]">
                    With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
                </div>

                <div className="flex flex-row gap-7 mt-8 mb-10">
                    <CTAbutton active={true} linkto={"/signup"}>
                        Learn More
                    </CTAbutton>

                    <CTAbutton active={false} linkto={"/login"}>
                        Book a Demo
                    </CTAbutton>
                </div>

                <div>
                    <video 
                       muted
                       loop
                       autoPlay
                       >
                        <source src={BannerVideo} type="video/mp4"/>
                       </video>
                </div>

                {/* Code Section 1 */}
                <div className="flex">
                    <CodeBlocks
                       position={"lg:flex-row"}
                       heading={
                        <div className="text-4xl font-semibold">
                            Unblock Your
                            <HighLightText text={"coding potential"}/>
                            with our online courses
                        </div>
                       }
                       subheading = {
                        "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                       }
                       ctabtn1={
                        {
                            btnText: "try it yourself",
                            linkto: "/signup",
                            active: true,
                        }
                       }
                       ctabtn2={
                        {
                            btnText: "learn more",
                            linkto:"/login",
                            active:false,
                        }
                       }
                       codeColor={"text-yellow-25"}
                       codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                       backgroundGradient={<div className="codeblock1 absolute"></div>}
                       />
                </div>

                 {/* Code Section 2 */}
                 <div>
                    <CodeBlocks
                       position={"lg:flex-row-reverse"}
                       heading={
                        <div className="text-4xl font-semibold">
                            Start
                            <HighLightText text={"coding in seconds"}/>
                          
                        </div>
                       }
                       subheading = {
                        "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                       }
                       ctabtn1={
                        {
                            btnText: "continue Lesson",
                            linkto: "/signup",
                            active: true,
                        }
                       }
                       ctabtn2={
                        {
                            btnText: "learn more",
                            linkto:"/login",
                            active:false,
                        }
                       }
                       codeColor={"text-yellow-25"}
                       codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                       backgroundGradient={<div className="codeblock1 absolute"></div>}
                       />
                </div>
                
            </div>
            {/* Section 2 */}
            {/* Section 3 */}
            {/* Section 4 */}
        </div>
    )
}