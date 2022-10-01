import React from "react";
import homePage1 from "../Images/homePage1.png";
import pencil from "../SVG/pencil.svg"
import upload from "../SVG/upload.svg"
import analyze from "../SVG/analyze.svg"
import autoCorrect from "../SVG/autoCorrect.svg"
import Report from "../SVG/Report.svg"
import Schedule from "../SVG/Schedule.svg"
import multipleQuestion from "../SVG/multipleQuestion.svg"
import mobile from "../SVG/mobile.svg"
import world from "../SVG/world.svg"
import ocr from "../SVG/ocr.svg"
import clock from "../SVG/clock.svg"
import tabProctoring from "../SVG/tabProctoring.svg"
import secured from "../SVG/secured.svg"
import candidates from "../SVG/candidates.svg"
import teacher from "../SVG/teacher.svg"
import Footer from "./Footer";
import { useNavigate} from 'react-router-dom';







function HomePageBody1() {
    const navigate=useNavigate();
  return (
    <div>
      <div className=" grid xmd:grid-cols-2 h-[500px] md:h-[590px] shadow-2xl bg-gradient-to-bl from-slate-200 to-gray-200">
        <div className=" block px-6 sm:w-[500px] xmd:w-[370px] sm:h-[400px] bg-transparent rounded-lg md:ml-[50px] md:mt-[120px] xl:mt-[110px] xl:ml-[100px] sm:mt-[40px]  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h1 className="font-bold mb-5 mt-14 text-black text-[22px] text-center"> Easiest way to make exams</h1>
          <div className="flex justify-center md:w-[350px]">
                <p className="text-center text-[20px] ] mb-10">
                    Exam ground is the best software platform for exams in your
                    institution. We make life easier for thousands of teachers, schools
                    and companies everyday.
                </p>
          </div>
          <div className="flex justify-center">
                <button
                    type="button"
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-0 py-2 text-center mr-2 mb-2 w-full mt-[0px] mx-0 md:text-center md:mr-2 md:mb-2 md:w-[150px] md:ml-2"
                    onClick={()=>navigate('/feature')}>
                        Explore Features
                </button>
                <button
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 w-full  text-center mr-2 mb-2 md:text-center md:mr-2 md:mb-2 md:w-[150px]"
                    onClick={()=>navigate('/SignUp')}>
                    Create 
                </button>
          </div>
        </div>
        <div className="hidden  xmd:block ">
          <div className="flex justify-center md:w-auto md:h-[540px] xmd:mt-[50px] ">
                <img
                src={homePage1}
                alt="laptop pic "
                className=" m-1"></img>
          </div>
        </div>
      </div>

    <div className="grid xmd:grid-cols-3 bg-white">
    <div className="block sm:my-[80px]">
        <div className="flex justify-center">
        <img src={pencil} alt="laptop pic " className='rounded-full  md:w-[200px] w-[100px] xl:w-[150px] xl:h-[150px] md:h-[200px] h-[150px] ml-[20px]'></img>

        </div>
        <div className="flex justify-center mb-2">
        <h1 className='text-2xl md:text-2xl font-bold text-gray-700'>Create</h1>
        </div>
        <div className="flex justify-center text-center px-4">
        <p >Quickly create great looking tests using multiple question types and formatting options.</p>
        </div>
    </div>
    <div className="block sm:my-[80px]">
        <div className="flex justify-center">
        <img src={upload} alt="laptop pic " className='rounded-full  md:w-[200px] w-[100px] md:h-[200px] xl:w-[150px] xl:h-[150px] h-[150px] ml-[20px]'></img>

        </div>
        <div className="flex justify-center mb-2">
        <h1 className='text-2xl md:text-2xl font-bold text-gray-700'>Upload</h1>
        </div>
        <div className="flex justify-center text-center px-4">
        <p >Tests can either be published privately to a select group or open them up to everyone with a single link and registration page.</p>
        </div>
    </div>
    <div className="block sm:my-[80px]">
        <div className="flex justify-center">
        <img src={analyze} alt="laptop pic " className='rounded-full  md:w-[200px] w-[100px] md:h-[200px] xl:w-[150px] xl:h-[150px] h-[150px] ml-[20px]'></img>

        </div>
        <div className="flex justify-center mb-2">
        <h1 className='text-2xl md:text-2xl font-bold text-gray-700'>Analyze</h1>
        </div>
        <div className="flex justify-center px-4">
        <p className="text-center">Exam Ground instantly marks and grades your tests.</p>
        </div>
    </div>
    </div>
    <div>

    </div>

    <div className="w-full  bg-slate-100">   
        <div className="grid  grid-cols-2 xmd:grid-cols-4 sm:w-[600px]  md:w-[700px] xl:w-[1000px]    sm:ml-[95px] md:ml-[180px] xl:ml-[220px]    ">
         
            <div className='block  mt-4  col-span-2 xmd:col-span-4 '>
                <div className="flex justify-center">
                <h1 className='text-xl xmd:text-2xl font-bold  text-gray-600 '>Why Choose Exam Ground</h1>
                </div>
                <div className="flex justify-center">
                <hr className='border-b-[0px] md:w-[1000px] w-[320px]  border-slate-500'></hr>
                
                </div>
            </div>
        
            
            <div className="block ">
                        <div className="flex justify-center h-[100px]  mt-[20px]">
                        <img src={autoCorrect} alt="autoCorrectImage " className="flex w-[70px] sm:w-[300px] sm:h-[100px] sm:justify-center " ></img>
                        </div>
                        <div>
                            <h1 className="flex justify-center text-gray-400 font-bold">Auto-Grading</h1>
                        </div>

    
                        
            </div>
            <div className="block">
                        <div className=" flex justify-center h-[100px]  mt-[20px]">
                        <img src={Report} alt="autoCorrectImage " className="flex w-[70px] sm:w-[300px] sm:h-[100px] justify-center " ></img>
                        </div>
                        <div>
                            <h1 className="flex justify-center text-gray-400 font-bold">Report</h1>
                        </div>
                        
            </div>
            <div className="block">
                        <div className="flex justify-center h-[100px]  mt-[20px]">
                        <img src={Schedule} alt="autoCorrectImage " className="flex w-[70px] sm:w-[300px] sm:h-[100px] justify-center " ></img>
                        </div>
                        <div>
                            <h1 className="flex justify-center text-gray-400 font-bold">Schedule Test</h1>
                        </div>
                        
            </div>
            <div className="block">
            <div className="flex justify-center h-[100px]  mt-[20px]">
                        <img src={multipleQuestion} alt="autoCorrectImage " className="flex w-[70px] sm:w-[300px] sm:h-[100px] justify-center " ></img>
                        </div>
                        <div>
                            <h1 className="flex justify-center text-gray-400 font-bold">Multiple Questions</h1>
                        </div>
                        
            </div>
            <div className="block">
            <div className="flex justify-center h-[100px]  mt-[20px]">
                        <img src={mobile} alt="autoCorrectImage " className="flex w-[70px] sm:w-[300px] sm:h-[100px] justify-center " ></img>
                        </div>
                        <div>
                            <h1 className="flex justify-center text-gray-400 font-bold">Mobile Ready</h1>
                        </div>
                        
            </div>
            <div className="block">
            <div className="flex justify-center h-[100px]  mt-[20px]">
                        <img src={world} alt="autoCorrectImage " className="flex w-[70px] sm:w-[300px] sm:h-[100px] justify-center " ></img>
                        </div>
                        <div>
                            <h1 className="flex justify-center text-gray-400 font-bold">Access Anywhere</h1>
                        </div>
            </div>
            <div className="block">
            <div className="flex justify-center h-[100px]  mt-[20px]">
                        <img src={ocr} alt="autoCorrectImage " className="flex w-[70px] sm:w-[300px] sm:h-[100px] justify-center " ></img>
                        </div>
                        <div>
                            <h1 className="flex justify-center text-gray-400 font-bold">OCR Test</h1>
                        </div>
            </div>
            <div className="block">
                          <div className="flex justify-center h-[100px]  mt-[20px]">
                        <img src={clock} alt="autoCorrectImage " className="flex w-[70px] sm:w-[300px] sm:h-[100px] justify-center " ></img>
                        </div>
                        <div>
                            <h1 className="flex justify-center text-gray-400 font-bold">Timed Test</h1>
                        </div>
            </div>
            <div className="block">
                          <div className="flex justify-center h-[100px]  mt-[20px]">
                        <img src={tabProctoring} alt="autoCorrectImage " className="flex w-[70px] sm:w-[300px] sm:h-[100px] justify-center " ></img>
                        </div>
                        <div>
                            <h1 className="flex justify-center text-gray-400 font-bold">Tab Monitoring</h1>
                        </div>
            </div>
            <div className="block">
                          <div className="flex justify-center h-[100px]  mt-[20px]">
                        <img src={secured} alt="autoCorrectImage " className="flex w-[70px] sm:w-[300px] sm:h-[100px] justify-center " ></img>
                        </div>
                        <div>
                            <h1 className="flex justify-center text-gray-400 font-bold">Secured</h1>
                        </div>
            </div>
            <div className="block">
                          <div className="flex justify-center h-[100px]  mt-[20px]">
                        <img src={clock} alt="autoCorrectImage " className="flex w-[70px] sm:w-[300px] sm:h-[100px] justify-center " ></img>
                        </div>
                        <div>
                            <h1 className="flex justify-center text-gray-400 font-bold">Timed Test</h1>
                        </div>
            </div>
            <div className="block">
                        <div className="flex justify-center h-[100px]  mt-[20px]">
                            <img src={clock} alt="autoCorrectImage " className="flex w-[70px] sm:w-[300px] sm:h-[100px] justify-center " ></img>
                        </div>
                        <div>
                            <h1 className="flex justify-center text-gray-400 font-bold">Timed Test</h1>
                        </div>
            </div>
            
           
        </div>
        

    
    
    </div>

    <div className="grid  grid-cols-1 sm:grid-cols-2 bg-white">
             <div className='block  mt-4  col-span-1 xmd:col-span-4 '>
                <div className="flex justify-center">
                    <h1 className='text-xl md:text-2xl font-bold  text-gray-600 '>Who Uses Exam Ground</h1>
                </div>
                <div className="flex justify-center">
                    <hr className='border-b-[0px] sm:w-[600px] md:w-[800px] xl:w-[1000px] w-[320px]  border-slate-500'></hr>
                
                </div>
            </div>

        <div className="block w-full h-auto sm:w-[300px] sm:ml-[100px] md:ml-[200px] xl:ml-[400px] sm:m-4 ">
          
                         <div className="flex justify-center w-screen sm:w-auto h-[100px]">
                            <img src={candidates} alt="candidates " className="  w-[200px] h-[100px] " ></img>
                        </div>
                        <div className="flex justify-center">
                              <h2 className="">Individuals</h2>
                        </div>
                        <div className="flex justify-center w-auto mx-8">
                            <p className=" text-[13px] text-center  text-gray-400 ">Create fun social quizzes that you can post on your website, blog or other social media site. If you prefer privacy the advanced email options allow you to quickly send private quizzes to your friends. The review feature allows your friends to review their answers after they have completed the quiz.</p>
                        </div>
           
        </div>
        <div className="block w-full sm:w-[300px] sm:mr-[50px] md:mr-[200px] xl:mr-[400px] sm:m-4 ">
          
                <div className="flex justify-center w-screen sm:w-auto h-[100px]">
                    <img src={teacher} alt="teacher" className="  w-[200px] h-[100px] " ></img>
                </div>
                <div className="flex justify-center">
                    <h2 className="">Teachers</h2>
                </div>
                <div className="flex justify-center w-auto mx-8">
                    <p className=" text-[13px] text-center  text-gray-400 ">Quickly create courses or online tests for your students. You can make your test public or just publish it for your class or school with our private test options. The premium account will allow you to upload media and have unlimited questions. The auto-grading function will save you time and allow you to concentrate on what's important.</p>
                </div>

         </div>

    </div>

    <div>
        <Footer/>
    </div>

</div>
  );
}

export default HomePageBody1;
