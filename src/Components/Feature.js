import React from "react";
import Navbar from "./Navbar";
import inuvative from "../Images/inuvativeDesign.png"
import examChoice from "../Images/examChoice.png"
import examConfigure from "../Images/examConfigure.png"
import questionType from "../Images/questionType.png"
import { Link } from 'react-router-dom';
import Footer from "./Footer";

function Feature() {
  return (
    <div>
      <Navbar />
      <div className=" grid  h-auto  xmd:grid-cols-2 md:h-[480px] shadow-2xl bg-gradient-to-bl from-slate-200 to-gray-200">
        <div className=" block px-6 sm:w-[500px] xmd:w-[550px] sm:h-[350px] bg-transparent rounded-lg md:ml-[50px] md:mt-[120px] xl:mt-[110px] xl:ml-[100px] sm:mt-[40px]  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h1 className="font-bold mb-5 mt-14 text-gray-500 text-[22px] "> An intuitive user interface</h1>
          <div className="flex justify-center md:w-[500px] md:h-auto">
              
                <p className=" text-[16px] ]">
                Our online quiz maker software is simple and easy to use. You can quickly create measurable, engaging tests customized to your needs.
                </p>
          </div>
          <div className="flex text-[16px] ml-6">
          <ul className="list-disc">
                  <li>No coding or software downloads required.</li>
                  <li>No adverts, so you can focus on managing great quizzes.</li>
                  <li>Secure, web-based platform.</li>
                  <li>Flexible features for schools, universities, and businesses large or small.</li>
                </ul>
          </div>
         
        </div>
        <div className="h-auto block mt-4 xmd:block ">
          <div className="flex justify-center md:w-auto md:h-[240px] xmd:mt-[160px] ">
                <img
                src={inuvative}
                alt="laptop pic "
                className=" m-1 shadow-2xl"></img>
          </div>
        </div>
      </div>
      


      <div className=" grid h-[500px] xmd:grid-cols-2  md:h-[480px] shadow-2xl bg-gradient-to-bl from-slate-50 to-gray-50">
        <div className="hidden sm:block px-6 sm:w-[500px] xmd:w-[550px] sm:h-[350px] bg-transparent rounded-lg md:ml-[50px] md:mt-[120px] xl:mt-[110px] xl:ml-[100px] sm:mt-[40px]  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">   
        <div className="xmd:block ">
          <div className="flex justify-center md:w-auto md:h-[240px] xmd:mt-[10px] ">
                <img
                src={examChoice}
                alt="laptop pic "
                className=" m-1 shadow-2xl"></img>
          </div>
        </div> 
                
        </div>
        <div className=" xmd:block ">
        <h1 className="font-bold mb-5 text-center text-gray-500 text-[22px] sm:mt-[150px] sm:ml-[120px]"> Choice of Exam</h1>
          <div className="flex justify-center md:w-[500px] md:h-auto sm:ml-[120px]">
              
                <p className=" text-center text-[16px] ">
                We offer various Exam type to help you create examinations or trivia quizzes that test respondents' ability and knowledge.
                </p>
          </div>
          <div className="flex text-[16px] justify-center ml-[120px]">
          <ul className="list-disc">
                  <li>3 Different Exams type </li>
                  <li>Multiple-choice Exam</li>
                  <li>Subjective Exam</li>
                  <li>Illustartive Exam</li>
                </ul>
          </div>
        </div>

        <div className="sm:hidden  px-6 sm:w-[500px] xmd:w-[550px] sm:h-[350px] bg-transparent rounded-lg md:ml-[50px] md:mt-[120px] xl:mt-[110px] xl:ml-[100px] sm:mt-[40px]  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">   
        <div className="xmd:block ">
          <div className="flex justify-center md:w-auto md:h-[240px] xmd:mt-[10px] ">
                <img
                src={examChoice}
                alt="laptop pic "
                className=" m-1 shadow-2xl"></img>
          </div>
        </div> 
                
        </div>
      </div>



      <div className="  h-[500px] md:h-[50px] shadow-2xl bg-gradient-to-r from-indigo-500 to-gray-300">
       <h2 className="text-white text-[25px] font-playfair text-center">Start Creating Quiz <Link to="/SignUp" className="hover:underline font-semibold underline">CLICK HERE</Link></h2>
      </div>

      <div className=" grid xmd:grid-cols-2 h-[500px] md:h-[480px] shadow-2xl bg-gradient-to-r from-slate-200 to-gray-200">
        <div className=" block px-6 sm:w-[500px] xmd:w-[550px] sm:h-[350px] bg-transparent rounded-lg md:ml-[50px] md:mt-[120px] xl:mt-[110px] xl:ml-[100px] sm:mt-[40px]  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h1 className="font-bold mb-5 mt-14 text-gray-500 text-[22px] "> Flexible customization options</h1>
          <div className="flex justify-center md:w-[500px] md:h-auto">
              
                <p className=" text-[16px] ]">
                Exam Ground is packed with the functionality that you need to create any exam. For example:-
                </p>
          </div>
          <div className="flex text-[16px] ml-6">
          <ul className="list-disc">
                  <li>Time Limit</li>
                  <li>Randomize Question</li>
                  <li>Question per page</li>
                  <li>Question Layout</li>
                  <li>Question Layout</li>
                  <li>Scheduling</li>
                </ul>
          </div>
         
        </div>
        <div className="xmd:block ">
          <div className="flex justify-center md:w-auto md:h-[380px] xmd:mt-[90px] ">
                <img
                src={examConfigure}
                alt="laptop pic "
                className=" m-1 shadow-2xl"></img>
          </div>
        </div>
      </div>
      

      <div className=" grid xmd:grid-cols-2 h-[500px] md:h-[560px] shadow-2xl bg-gradient-to-bl from-slate-50 to-gray-50">
        <div className=" block px-6 sm:w-[500px] xmd:w-[550px] sm:h-[400px] bg-transparent rounded-lg md:ml-[50px] md:mt-[120px] xl:mt-[90px] xl:ml-[100px] sm:mt-[40px]  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">   
        <div className="xmd:block ">
          <div className="flex justify-center md:w-auto md:h-[360px] xmd:mt-[10px] ">
                <img
                src={questionType}
                alt="laptop pic "
                className=" m-1 shadow-2xl border-2 border-gray-400"></img>
          </div>
        </div> 
                
        </div>
        <div className="xmd:block ">
        <h1 className="font-bold mb-5  text-gray-500 text-[22px] mt-[150px] ml-[100px]"> Choice of question types and formatting options</h1>
          <div className="flex justify-center md:w-[500px] md:h-auto ml-[100px]">
              
                <p className=" text-[16px] ">
                We offer various question type and formatting options to help you create examinations.
                </p>
          </div>
          <div className="flex text-[16px] ml-[120px]">
          <ul className="list-disc">
                  <li>Select Different Questions type </li>
                  <li>Multiple-choice Question</li>
                  <li>Subjective Questions</li>
                  <li>Illustartive Questions</li>
                </ul>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Feature;