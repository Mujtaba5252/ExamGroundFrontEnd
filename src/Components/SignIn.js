import React from "react";
import logo2 from "../Images/logo2.png";
import Authentication from "../Images/Authentication.png"
import { Link,useNavigate} from 'react-router-dom';
import backButton from "../SVG/backButton.svg"

function SignIn() {
  const navigate=useNavigate();
  return (
    <div className="">
      
      
        <div className="grid grid-cols-1  bg-gradient-to-r from-cyan-100 to-blue-200  sm:bg-inherit sm:grid-cols-2  ">
          
            <div className="hidden sm:block">
            <div className="sm:w-10 sm:h-10">
                    <Link to="/">
                        <img src={backButton} alt="backButton"></img>
                    </Link>
                </div>
                  <div className="flex justify-start w-full h-[608px]">
                  <img
                    src={Authentication}
                    className="w-full h-full"
                    alt="Sampleimage"
                  />
                  </div>
            </div> 


            <div className="h-screen sm:h-screen sm:block  w-auto md:w-auto xl:w-auto">
              <div className="w-[300px] mx-auto sm:w-[300px] sm:mx-auto md:mx-auto xl:mx-auto sm:mt-[150px] md:w-[400px] xl:w-[600px]">
                      <form>
                      <div className="flex justify-center mt-[70px] mb-4">
                            <img src={logo2} alt="logo" className="w-[150px] h-[50px]"></img>
                        </div>
                        <div className="flex justify-center font-serif text-teal-600 font-bold text-2xl mb-10">
                          <p>SIGN IN</p>
                        </div>

                        <div className="mb-6">
                          <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput2"
                            placeholder="Email address"
                          />
                        </div>

                        <div className="mb-6">
                          <input
                            type="password"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput2"
                            placeholder="Password"
                          />
                        </div>

                        <div className="flex justify-between items-center mb-6">
                          <div className="form-group form-check">
                            <input
                              type="checkbox"
                              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                              id="exampleCheck2"
                            />
                            <label
                              className="form-check-label inline-block text-gray-800"
                              for="exampleCheck2"
                            >
                              Remember me
                            </label>
                          </div>
                          <a href="#!" className="text-gray-800">
                            Forgot password?
                          </a>
                        </div>

                        <div className="grid grid-cols-2 text-center lg:text-left">
                          <div className=" block  ">
                            <div className="flex justify-center">
                                  <button
                                    type="button"
                                    className="px-7 py-3 sm:w-[200px] bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    onClick={()=>navigate('/')}
                                  >
                                    Login
                                  </button>
                              </div>
                          </div>
                          <div className="block ">
                            <div className="flex justify-center">
                                <button
                                  type="button"
                                  className="px-7 py-3 sm:w-[200px] bg-slate-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                  onClick={()=>navigate('/')}
                                >
                                  Back
                                </button>
                            </div>
                          </div>
                          <div className="block col-span-2 w-[300px]">
                            <div className="flex w-[300px]">
                              <p className="text-sm font-semibold mt-2 pt-1 mb-0 ">
                                Don't have an account?
                                <Link
                                  to="/SignUp"
                                  className="inline-flex ml-2 text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                >
                                  Register
                                </Link>
                              </p>
                              </div>
                          </div>
                        </div>
                      </form>
            </div>
            </div>
          </div>
        
     
    </div>
  );
}

export default SignIn;
