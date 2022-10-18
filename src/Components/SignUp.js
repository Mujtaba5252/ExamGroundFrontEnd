import React, { useState } from "react";
import logo2 from "../Images/logo2.png";
import { Link,useNavigate} from 'react-router-dom';
import backButton from "../SVG/backButton.svg"
import { Dialog } from "@mui/material";



function SignUp() {
    
    const [toggleState,setToggleState]=useState(0);
   
    const navigate=useNavigate();
    const [employee_id,set_employeeID]=useState("");
    const [system_id,set_systemID]=useState("");
    const [first_name,set_firstName]=useState("");
    const [last_name,set_lastName]=useState("");
    const [select_uni,set_university]=useState("");
    const [email,set_email]=useState("");
    const [password,set_password]=useState("");
    const [confirm_password,set_confirmPassword]=useState("");


    const [EmployeeError,set_EmployeeError]=useState(false);
    const [SystemIDerror,set_systemID_Error]=useState(false);
    const [fnameError,set_fnameError]=useState(false);
    const [lnameError,set_lnameError]=useState(false);
    const [universityError,set_universityError]=useState(false);
    const [emailError,set_emailError]=useState(false);
    const [passwordError,set_passwordError]=useState(false);
    const [confirmPassError,set_confirmPassError]=useState(false);
    


    const teachersignup = async (e) => {
        if(employee_id && first_name && last_name && select_uni && email&& password && confirm_password!=null )
        {

       
                e.preventDefault();
                console.log(employee_id,first_name,last_name,select_uni,email,password,confirm_password );
                let data = await fetch("http://localhost:5000/teachersignup", {
                    method: "post",
                    body: JSON.stringify({
                    employee_id,
                    first_name,
                    last_name,
                    select_uni,
                    email,
                    password,
                    }),
                    headers: { "Content-Type": "application/json" },
                });

                const result = await data.json();
                console.log(result);

    }
    else{
    alert("Please Fill all the field");
        e.preventDefault();
    }
    };




    const studentsignup=async(e)=>{
                        if (
                        system_id && first_name && last_name && select_uni && email && password && confirm_password != null
                        ) {
                        e.preventDefault();
                        console.log( system_id,first_name,last_name,select_uni,email,password,confirm_password);
                        let data = await fetch("http://localhost:5000/studentsignup", {
                            method: "post",
                            body: JSON.stringify({
                            system_id,
                            first_name,
                            last_name,
                            select_uni,
                            email,
                            password,
                            }),
                            headers: { "Content-Type": "application/json" },
                        });

                        const result = await data.json();
                        console.log(result);
                        } else {
                        alert("Please Fill all the field");
                        e.preventDefault();
                        }
        };
    

   
        const systemID_Handler=(e)=>{
            let item=e.target.value;
            
            
            if(item.match("^[1-9]{5}")!=null)
            {
                set_systemID_Error(false);
                set_systemID(item);
              
                
            }
            else
            {
            set_systemID_Error(true);
            }
          
        };
        const employeeid_Handler=(e)=>{
            let item=e.target.value;
            
            
            if(item.match("^[1-9]{5}")!=null)
            {
                set_EmployeeError(false);
                set_employeeID(item);
              
                
            }
            else
            {
            set_EmployeeError(true);
            }
          
        }
        const firstname_Handler=(e)=>{
            let item=e.target.value;
            
            if(item.match("[a-zA-Z]")!=null)
            {
                set_fnameError(false);
                set_firstName(item);
            }
            else
            {
                set_fnameError(true);
            }
            
            
        }
        const lastname_Handler=(e)=>{
            let item=e.target.value;
            
            if(item.match("[a-zA-Z]")!=null)
            {
                set_lnameError(false);
                set_lastName(item);
                
            }
            else
            {
                set_lnameError(true);
            }
           
          
        }
        const university_Handler=(e)=>{
            let item=e.target.value;

            console.log(item)
            if(item.match("[a-zA-Z]")!=null)
            {
                set_universityError(false);
            
                set_university(item);
                
            }
            else
            {
                set_universityError(true);
            }
         
        }
        const email_Handler=(e)=>{
            let item=e.target.value;
            
            if(item.match("[a-zA-Z0-9]@numl.edu.pk")!=null)
            {
                set_emailError(false);
                set_email(item)
            }
            else
            {
                set_emailError(true);
            }
            
          
        }

        
        const password_Handler=(e)=>{
            // var passwordCheck=e.target.value;
            let  passwordCheck=e.target.value;
              
                let pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
                
                if(passwordCheck.match(pattern)!=null)
                {
                    set_passwordError(false);
                    set_password(passwordCheck);
                }
                else
                {
                    set_passwordError(true);
                }
               
            
             
           
          
        }
        
        const confirmPass_handler=(e)=>{
            let item=e.target.value;
           
            
                if(item !== password )
                {
                    set_confirmPassError(true);
                    set_confirmPassword(item);
                
                    
                  
                }
                else
                {
                    set_confirmPassError(false);
                }
               
        }
       
       
  return (
    <div>
      <div className="grid grid-cols-1   h-full bg-gradient-to-r from-indigo-200  to-green-100 sm:grid-cols-2 ">
            <div className="hidden sm:block">
                <div className="w-10 h-10">
                    <Link to="/">
                        <img src={backButton} alt="backButton"></img>
                    </Link>
                </div>

                <div className="h-[608px]">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    className="w-full h-full"
                    alt="Phoneimage"/>
                </div>
            </div>
            <div className="block h-full sm:h-full  sm:block  w-auto md:w-auto xl:w-auto">
                <div className="w-[300px] mx-auto sm:w-[300px] sm:mx-auto md:mx-auto xl:mx-auto xl:mt-[50px] md:w-[400px] xl:w-[600px]">
                        <div className="flex justify-center mt-[50px]">
                            <img src={logo2} alt="logo" className="w-[150px] h-[50px]"></img>
                        </div>
                        <div className="flex justify-center mt-6 ">
                            <h1 className="text-teal-600 font-serif text-2xl">SIGN UP</h1>
                        </div>

                        
                                                        
                                <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                                    <ul className="flex flex-wrap justify-center -mb-px text-sm font-medium text-center">
                                        <li className="mr-2">
                                            <button onClick={()=>setToggleState(0)} type="button" className={`inline-block p-4  border-b-2  hover:text-blue-600  focus:border-blue-600  ${toggleState===0?'active:text-blue-600 ':null}`  }>Teacher</button>
                                        </li>
                                        <li className="mr-2" >
                                            <button onClick={()=>setToggleState(1)}  type="button" className={`inline-block p-4  border-b-2   hover:text-blue-600  focus:border-blue-500    ${toggleState===1?'active:text-blue-600':null}`}  >Student</button>
                                        </li>
                                       
                                    </ul>
                                </div>
                                <div className="" >
                                
                                    <div className="p-2 bg-transparent rounded-lg dark:bg-gray-800" hidden={toggleState !==0}>
                                        <form onSubmit={teachersignup}>
                                             <div className=" mb-2">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-4 py-2 text-base  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Employee ID"
                                               // value={employee_id}
                                                onChange={employeeid_Handler}
                                            
                                            />
                                            {EmployeeError? <span  className="text-red-600 block ">Enter Corrrect Employee ID</span>:null}
                                            </div>
                                            <div className="xl:inline-flex xl:mr-8 sm:mb-2 mb-2">
                                            <input
                                                type="text"
                                                className="form-control w-full xl:w-[275px] px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="First Name"
                                                // value={first_name}
                                               
                                                onChange={firstname_Handler}
                                               
                                            />
                                            {fnameError? <span className="text-red-600 block xl:hidden ">Enter Valid First Name</span>:null}
                                            </div>
                                            <div className="xl:inline-flex mb-2">
                                            <input
                                                type="text"
                                                className="form-control w-full xl:w-[275px] px-4 py-2 text-base  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Last Name"
                                                // value={last_name}
                                                // required
                                                onChange={lastname_Handler}
                                            />
                                            {lnameError? <span className="text-red-600  block xl:hidden ">Enter Valid last Name</span>:null}
                                            </div>
                                            <div className="flex">
                                            {fnameError? <span className="text-red-600 hidden xl:block ">Enter Valid First Name</span>:null}
                                            {lnameError? <span className="text-red-600 hidden xl:block xl:ml-[150px]">Enter Valid last Name</span>:null}
                                            </div>
                                            <div className="mb-2">
                                                {/* <select id="uni" className="form-control w-full px-4 py-2 text-base  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                
                                                onChange={university_Handler}
                                                >
                                                    
                                                
                                                {university.map((option) => (
                                                    <option id="option" value={select_uni} key={option} > {option}</option>
                                                    ))}
                                                    
                                                </select>
                                                {universityError? <span className="text-red-600 ">Select University</span>:null} */}
                                                <input
                                                type="text"
                                                className="form-control w-full  px-4 py-2 text-base  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Enter University Name"
                                                
                                                onChange={university_Handler}
                                            />
                                            {universityError? <span className="text-red-600 ">Enter Valid University Name</span>:null}
                                            </div>
                                            <div className=" mb-2">
                                            <input
                                                type="email"
                                                className="form-control block w-full px-4 py-2 text-base  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Email address"
                                                autoComplete="username"
                                            
                                                onChange={email_Handler}
                                            />
                                            {emailError? <span className="text-red-600 ">Enter Valid University Email</span>:null}
                                            </div>

                                            <div className="  mb-2">
                                            <input
                                                type="password"
                                                className="form-control block w-full px-4 py-2 text-base  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Password"
                                                autoComplete="new-password"
                                                    id="password"
                                                onChange={password_Handler}
                                                
                                            />
                                            {passwordError? <span className="text-red-600 ">Enter Valid Password(Must use First letter capital and  any special character</span>:null}
                                            </div>
                                            <div className=" mb-2">
                                            <input
                                                type="password"
                                                id="confirm_password"
                                                className="form-control block w-full px-4 py-2 text-base  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Confirm Password"
                                                autoComplete="new-password"
                                             
                                                onChange={confirmPass_handler}
                                               
                                            />
                                            {confirmPassError? <span className="text-red-600 ">Password not matched</span>:null}
                                            </div>

                                            

                                            <button
                                            type="submit"
                                            className="inline-block px-7 py-3 mb-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                          
                                            >
                                            Sign Up
                                            </button>
                                            <button
                                            type="button"
                                            className="inline-block px-7 py-3  bg-slate-200 text-black border-0 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-400 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                            onClick={()=>navigate('/')}
                                            >
                                            Back
                                            </button>
                                        </form>
                                    </div>


                                    {/* //student signup form */}
                                    <div className=" px-2 py-1 bg-transparent rounded-lg dark:bg-gray-800"  hidden={toggleState !==1}>
                                    
                                        <form onSubmit={studentsignup}>
                                        <div className=" mb-2">
                                            <input
                                                type="text"
                                                className="form-control w-full px-4 py-2 text-base  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="System ID"
                                               
                                                onChange={systemID_Handler}

                                            />
                                             {SystemIDerror? <span  className="text-red-600 block ">Enter Corrrect Student ID</span>:null}
                                            </div>
                                        <div className="xl:inline-flex xl:mr-8 sm:mb-2 mb-2">
                                            <input
                                                type="text"
                                                className="form-control w-full xl:w-[275px] px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="First Name"
                                                
                                                onChange={firstname_Handler}
                                            />
                                            {fnameError? <span className="text-red-600 block xl:hidden ">Enter Valid First Name</span>:null}
                                            </div>
                                            <div className="xl:inline-flex mb-2">
                                            <input
                                                type="text"
                                                className="form-control w-full xl:w-[275px] px-4 py-2 text-base  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Last Name"
                                                
                                                onChange={lastname_Handler}
                                            />
                                            {lnameError? <span className="text-red-600  block xl:hidden ">Enter Valid last Name</span>:null}
                                            </div>
                                            <div className="flex">
                                            {fnameError? <span className="text-red-600 hidden xl:block ">Enter Valid First Name</span>:null}
                                            {lnameError? <span className="text-red-600 hidden xl:block xl:ml-[150px]">Enter Valid last Name</span>:null}
                                            </div>
                                            
                                            <div className="mb-2">
                                                {/* <select className="form-control w-full px-4 py-2 text-base  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                               
                                                 onChange={university_Handler}>
                                                {university.map((option) => (
                                                    <option  key={option}>{option}</option>
                                                    ))}
                                                    
                                                </select>
                                                {universityError? <span className="text-red-600 ">Select University</span>:null} */}
                                                 <input
                                                type="text"
                                                className="form-control w-full px-4 py-2 text-base  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Enter University Name"
                                                
                                                onChange={university_Handler}
                                            />
                                            {universityError? <span className="text-red-600 ">Enter Valid University Name</span>:null}
                                            </div>
                                       
                                            <div className=" mb-2">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-4 py-2 text-base  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="University Email address"
                                                autoComplete="username"
                                                
                                                onChange={email_Handler}
                                            />
                                            {emailError? <span className="text-red-600 ">Enter Valid University Email</span>:null}
                                            </div>

                                            <div className="  mb-2">
                                            <input
                                                type="password"
                                                className="form-control block w-full px-4 py-2 text-base  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Password"
                                                autoComplete="new-password"
                                            
                                                onChange={password_Handler}

                                            />
                                             {passwordError? <span className="text-red-600 ">Enter Valid Password(Must use First letter capital and  any special character</span>:null}
                                            </div>
                                            <div className=" mb-2">
                                            <input
                                                type="password"
                                                className="form-control block w-full px-4 py-2 text-base  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Confirm Password"
                                                autoComplete="new-password"
                                              
                                                onChange={confirmPass_handler}
                                            />
                                              {confirmPassError? <span className="text-red-600 ">Password not matched</span>:null}
                                            </div>

                                           

                                            <button
                                            type="submit"
                                            className="inline-block px-7 mb-2 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                            onClick={studentsignup}
                                            >
                                            Sign Up
                                            </button>
                                            <button
                                            type="button"
                                            className="inline-block px-7 py-3 bg-slate-200 text-black border-0  font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-400 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                            onClick={()=>navigate('/')}
                                            >
                                            Back
                                            </button>
                                        </form>

                                    </div>
                                    
                                </div>

                </div>        

            </div>

        </div>
      
    </div>
  );
}

export default SignUp;
