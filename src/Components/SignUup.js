import React from 'react'
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo2 from "../Images/logo2.png";


function SignUup() {
  return (
    <div>

        <div className='container-fluid'>
            <div className='row'>
                <div className='col d-none d-md-block SignupImagediv'>
                        <div className='SignupImage'>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                alt="Phoneimage"/>
                        </div>
                </div>
                <div className='col'>

                    <div className='logo mx-auto'>
                        <img src={logo2} alt="logo"/>
                    </div>
                    <div className='signupTitle text-center'>
                        <h1>SIGN UP</h1>
                    </div>

                </div>

            </div>

        </div>

        
    </div>
  )
}

export default SignUup